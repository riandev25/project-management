import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().updateCard,
    onMutate: async (newLabel) => {
      console.log(newLabel);
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists', newLabel] });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData(['lists', newLabel]);

      // Return a context with the previous and new label
      return { previousLabel, newLabel };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newLabel, context) => {
      queryClient.setQueryData(
        ['lists', context?.newLabel],
        context?.previousLabel
      );
    },
    // Always refetch after error or success:
    onSettled: (newLabel) => {
      queryClient.invalidateQueries(['lists', newLabel]);
      console.log('after');
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
