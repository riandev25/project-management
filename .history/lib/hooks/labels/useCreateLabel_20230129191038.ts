import { useMutation, useQueryClient } from '@tanstack/react-query';
import labelService from '../../../services/labelService';

export const useCreateLabel = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().createLabel,
    onSuccess: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
