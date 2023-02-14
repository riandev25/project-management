import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardData } from '../../../interfaces/board.interface';
import { listService } from '../../../services/listService';

export const useCreateCard = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().createCard,
    onMutate: async ({ cardName, _id }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous value
      const previousLists = queryClient.getQueryData(['lists']);

      // Optimistically update to the new value
      queryClient.setQueryData(['lists'], (oldLists: any) => {
        const newLists = oldLists.map((old: IBoardData) => {
          if (old._id === _id)
            return {
              ...old,
              cards: [...old.cards, { cardName, _id: new Date() }],
            };
          return old;
        });
        console.log(newLists);
        return newLists;
      });
      return { previousLists };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newLists, context) => {
      queryClient.setQueryData(['lists'], context?.previousLists);
    },
    onSettled: () => {
      const timer = setTimeout(() => {
        queryClient.invalidateQueries(['lists']);
      }, 200);
      clearTimeout(timer);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
