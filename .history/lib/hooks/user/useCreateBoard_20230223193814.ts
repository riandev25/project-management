import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoard } from '../../../interfaces/board';
import { userService } from '../../../services/userService';

export const useCreateBoard = () => {
  const queryClient = useQueryClient();
  const { createBoard } = userService();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationKey: ['boards-list'],
    mutationFn: createBoard,
    onMutate: async ({ boardName }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['boards-list'] });

      // Snapshot the previous value
      const previousBoardsList = queryClient.getQueryData([
        'boards-list',
      ]) as IBoard[];

      // Optimistically update to the new value
      queryClient.setQueryData(['boards-list'], (old: any) => [
        ...old,
        { boardName },
      ]);
      return { previousBoardsList };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newBoardList, context) => {
      queryClient.setQueryData(['boards-list'], context?.previousBoardsList);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['boards-list']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
