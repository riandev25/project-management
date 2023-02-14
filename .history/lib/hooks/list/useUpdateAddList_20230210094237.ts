import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useUpdateAddList = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().updateList,
    onMutate: async (newLists) => {
      console.log(newLists);
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData(['lists']);

      queryClient.setQueryData(['lists'], (old: any) => [...old, newLists]);

      // Return a context with the previous and new label
      return { previousLabel };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newLists, context) => {
      queryClient.setQueryData(['lists'], context?.previousLabel);
    },
    // Always refetch after error or success:
    onSettled: (newLists) => {
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
