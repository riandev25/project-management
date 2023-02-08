import { useMutation, useQueryClient } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useCreateList = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: listService().createList,
    onSettled: () => {
      queryClient.invalidateQueries(['lists']);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};