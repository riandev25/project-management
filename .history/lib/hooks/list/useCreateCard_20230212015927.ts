import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardCardData } from '../../../interfaces/board.interface';
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
        console.log(oldLists);
        const newlists = oldLists.map((old: IBoardCardData) => {
          if (old._id === _id) return { ...old, cardName };
          return old;
        });
        console.log(newlists);
        return newlists;
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
