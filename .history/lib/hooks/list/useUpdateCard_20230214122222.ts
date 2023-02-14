import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardData } from '../../../interfaces/board.interface';
import { listService } from '../../../services/listService';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().updateCard,
    onMutate: async ({ idList, _id, cardName }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous data
      const previousLists = queryClient.getQueryData(['lists']);

      queryClient.setQueryData(['lists'], (oldData: any) => {
        const newData = oldData.map((old: IBoardData) => {
          if (old._id === idList) {
            const newCards = old.cards.map((oldCards) => {
              if (oldCards._id === _id) return { ...oldCards, cardName };
              return oldCards;
            });
            return { ...old, newCards };
          }
          return old;
        });
        console.log(newData);
        return newData;
      });

      // Return a context with the previous and new label
      return { previousLists };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newLabel, context) => {
      queryClient.setQueryData(['lists'], context?.previousLists);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    },
  });

  return { isError, isSuccess, mutateAsync, isLoading };
};
