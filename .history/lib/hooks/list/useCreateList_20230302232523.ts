import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useCreateList = () => {
  // const queryClient = useQueryClient();
  // const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
  //   mutationFn: listService().createList,
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['lists']);
  //   },
  // });
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().createList,
    onMutate: async ({ listName }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous value
      const previousLists = queryClient.getQueryData(['lists']);

      // Optimistically update to the new value
      queryClient.setQueryData(['lists'], (old: any) => {
        console.log(old)
        [...old, { listName }]
      });
      return { previousLists };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newLists, context) => {
      queryClient.setQueryData(['lists'], context?.previousLists);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['lists']);
    },
  });

  return { isError, isSuccess, mutateAsync, isLoading };
};
