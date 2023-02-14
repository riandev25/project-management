import { useMutation, useQueryClient } from '@tanstack/react-query';
import labelService from '../../../services/labelService';

export const useCreateLabel = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().createLabel,
    onMutate: async (data) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['labels'] });

      // Snapshot the previous value
      const previousLabels = queryClient.getQueryData(['labels']);

      // Optimistically update to the new value
      queryClient.setQueryData(['labels'], (old: any) => [...old, data]);
      return { previousLabels };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newChecklist, context) => {
      queryClient.setQueryData(['labels'], context?.previousLabels);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
