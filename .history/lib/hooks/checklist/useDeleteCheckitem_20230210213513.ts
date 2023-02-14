import { useQueryClient, useMutation } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';
import { IBoardCardData, IBoardData } from '../../../interfaces/board.interface';

export const useDeleteCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().deleteCheckitem,
    onMutate: async (checkitemId) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['checkitems'],
      });

      // Snapshot the previous value
      const previousCheckitem = queryClient.getQueryData(['checkitems']);

      // Optimistically update to the new value
      queryClient.setQueryData(['checkitems'], (old: any) => {
        return old.filter(
          (checkitem: IBoardCardData) => checkitem._id !== checkitemId
        );
      });
      return { previousCheckitem, checkitemId };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, checkitemId, context) => {
      queryClient.setQueryData(
        ['checkitems', context?.checkitemId],
        context?.previousCheckitem
      );
    },
    onSettled: (checkitemId) => {
      queryClient.invalidateQueries(['checkitems']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
