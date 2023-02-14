import { useMutation, useQueryClient } from '@tanstack/react-query';
import attachmentService from '../../../services/attachmentService';

export const useCreateAttachment = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: attachmentService().createAttachment,
    onMutate: async (file) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['attachments'] });

      // Snapshot the previous value
      const previousAttachments = queryClient.getQueryData(['attachments']);

      // Optimistically update to the new value
      queryClient.setQueryData(['attachments'], (old: any) => [...old, file]);
      return { previousAttachments, file };
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

// export const useCreateAttachment = () => {
//   const queryClient = useQueryClient();
//   const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: attachmentService().createAttachment,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['attachments']);
//     },
//   });

//   return { data, isError, isSuccess, mutateAsync, isLoading };
// };
