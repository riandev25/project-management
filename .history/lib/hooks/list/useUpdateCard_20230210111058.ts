import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';
import { useGetLists } from './useGetLists';
import { IBoardData } from '../../../interfaces/board.interface';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().updateList,
    onMutate: async (newLabel) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData(['lists']);
      console.log(newLabel);

      const a = queryClient.setQueryData(['lists'], (old: any) => {
        console.log(old);
        return {
          ...old,
          cards: [...old.cards, { ...newLabel }],
        };
      });

      // queryClient.setQueryData(['lists'], (old: any) => {
      //   const updatedBoard = old.map((board: any) => {
      //     if (board._id === newLabel._id) {
      //       return {
      //         ...board,
      //         cards: [...board.cards, newLabel],
      //       };
      //     }
      //     return board;
      //   });
      //   return updatedBoard;
      // });

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
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
