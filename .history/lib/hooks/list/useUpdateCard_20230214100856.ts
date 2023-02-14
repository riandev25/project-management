import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useCreateCard = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().createCard,
    onMutate: async (newLabel) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['lists'] });

      // Snapshot the previous data
      const previousLabel = queryClient.getQueryData(['lists']);
      // console.log(newLabel);

      // queryClient.setQueryData(['lists'], (old: any) => {

      // });

      queryClient.setQueryData(['lists'], (oldData: any) => {
        console.log(oldData);
        const [firstObject] = oldData;
        return [
          {
            ...firstObject,
            cards: [...firstObject.cards, { cardName: newLabel }],
          },
        ];
      });

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
