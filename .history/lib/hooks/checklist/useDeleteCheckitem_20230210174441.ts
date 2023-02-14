import { useMutation, useQueryClient } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useDeleteCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().deleteCheckitem,
    onMutate: (data) => {
      console.log(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['checkitems']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
