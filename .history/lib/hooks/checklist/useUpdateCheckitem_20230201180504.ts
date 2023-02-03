import { useMutation, useQueryClient } from '@tanstack/react-query';

import checklistService from '../../../services/checklistService';

export const useUpdateLabel = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().updateCheckitem,
    onMutate: async (newCheckitem) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['checkitem', newCheckitem._id],
      });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData([
        'checkitem',
        newCheckitem._id,
      ]);

      // Return a context with the previous and new label
      return { previousLabel, newCheckitem };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newCheckitem, context) => {
      queryClient.setQueryData(
        ['checkitem', context?.newCheckitem._id],
        context?.previousLabel
      );
    },
    // Always refetch after error or success:
    onSettled: (newCheckitem) => {
      queryClient.invalidateQueries(['checkitem', newCheckitem._id]);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
