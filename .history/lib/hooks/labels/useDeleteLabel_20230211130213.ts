import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ILabel } from '../../../interfaces/label.interface';
import labelService from '../../../services/labelService';

export const useDeleteLabel = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().deleteLabel,
    onMutate: async (id) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['labels'],
      });

      // Snapshot the previous value
      const previousChecklist = queryClient.getQueryData(['labels']);

      // Optimistically update to the new value
      queryClient.setQueryData(['labels'], (oldLabels: any) => {
        return oldLabels.filter((old: ILabel) => old._id !== id);
      });
      return { previousChecklist, id };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, id, context) => {
      queryClient.setQueryData(
        ['labels', context?.id],
        context?.previousChecklist
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};

// export const useDeleteLabel = () => {
//   const queryClient = useQueryClient();
//   const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: labelService().deleteLabel,
//     onSettled: (newLabel) => {
//       queryClient.invalidateQueries(['labels', newLabel._id]);
//     },
//   });

//   return { data, isError, isSuccess, mutateAsync, isLoading };
// };
