import { useMutation, useQueryClient } from '@tanstack/react-query';
import labelService from '../../../services/labelService';

export const useUpdateLabel = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().updateLabel,
    onMutate: async (newLabel) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['labels', newLabel._id] });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData(['labels', newLabel._id]);

      // Return a context with the previous and new label
      return { previousLabel, newLabel };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newLabel, context) => {
      queryClient.setQueryData(
        ['labels', context?.newLabel._id],
        context?.previousLabel
      );
    },
    // Always refetch after error or success:
    onSettled: (newLabel) => {
      queryClient.invalidateQueries({ queryKey: ['labels', newLabel._id] });
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
