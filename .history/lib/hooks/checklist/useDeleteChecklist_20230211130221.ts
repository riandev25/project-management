import { useQueryClient, useMutation } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';
import { IBoardData } from '../../../interfaces/board.interface';

export const useDeleteChecklist = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().deleteChecklist,
    onMutate: async (id) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['checklists'],
      });

      // Snapshot the previous value
      const previousChecklist = queryClient.getQueryData(['checklists']);

      // Optimistically update to the new value
      queryClient.setQueryData(['checklists'], (old: any) => {
        return old.filter((checkitem: IBoardData) => checkitem._id !== id);
      });
      return { previousChecklist, id };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, id, context) => {
      queryClient.setQueryData(
        ['checklists', context?.id],
        context?.previousChecklist
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(['checklists']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
