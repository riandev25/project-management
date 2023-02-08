import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useDeleteList = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().deleteList,
    onSettled: () => {
      queryClient.invalidateQueries(['lists']);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};