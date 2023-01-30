import { useMutation, useQueryClient } from '@tanstack/react-query';
import labelService from '../../../services/labelService';

export const useDeleteLabel = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().deleteLabel,
    onSettled: (newLabel) => {
      queryClient.invalidateQueries(['labels', newLabel._id]);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
