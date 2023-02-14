import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardData } from '../../../interfaces/board.interface';
import { listService } from '../../../services/listService';

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().deleteCard,
    onMutate: async ({ idList, _id }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous value
      const previousLists = queryClient.getQueryData(['lists']);

      // Optimistically update to the new value
      queryClient.setQueryData(['lists'], (oldLists: any) => {
        return oldLists.map((old: IBoardData) => {
          if (old._id === idList) {
            return old.cards.filter((oldCard) => oldCard !== _id);
          }
          return old;
        });
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
  return { isSuccess, isError, mutateAsync, isLoading };
};
