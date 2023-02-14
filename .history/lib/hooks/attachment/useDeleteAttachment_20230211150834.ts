import { useMutation, useQueryClient } from '@tanstack/react-query';
import attachmentService from '../../../services/attachmentService';
import { IAttachmentObject } from '../../../interfaces/attachment.interface';

export const useDeleteAttachment = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: attachmentService().deleteAttachment,
    onMutate: async (id) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['attachments'] });

      // Snapshot the previous value
      const previousAttachments = queryClient.getQueryData(['attachments']);

      // Optimistically update to the new value
      queryClient.setQueryData(['attachments'], (oldAttachments: any) => {
        return oldAttachments.filter(
          (old: IAttachmentObject) => old._id !== id
        );
      });
      return { previousAttachments };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, file, context) => {
      queryClient.setQueryData(['attachments'], context?.previousAttachments);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['attachments']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};

// export const useDeleteAttachment = () => {
//   const queryClient = useQueryClient();
//   const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: attachmentService().deleteAttachment,
//     onSettled: () => {
//       queryClient.invalidateQueries(['attachments']);
//     },
//   });

//   return { data, isError, isSuccess, mutateAsync, isLoading };
// };
