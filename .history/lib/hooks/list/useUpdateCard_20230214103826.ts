import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardData } from '../../../interfaces/board.interface';
import { listService } from '../../../services/listService';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().updateCard,
    onMutate: async ({ idList, _id, cardName }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous data
      const previousLists = queryClient.getQueryData(['lists']);
      // console.log(newLabel);

      // queryClient.setQueryData(['lists'], (old: any) => {

      // });

      queryClient.setQueryData(['lists'], (oldData: any) => {
        return oldData.map((old: IBoardData) => {
          if (old._id === idList) {
            return old.cards.map((oldCards) => {
              if (oldCards._id === _id) return { ...oldCards, cardName };
              return oldCards;
            });
          }
          return old;
        });
      });

      // Return a context with the previous and new label
      return { previousLists };
    },
    // If mutation fails, use the context we returned above
    onError: (err, newLabel, context) => {
      queryClient.setQueryData(['todos'], context?.previousLists);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
