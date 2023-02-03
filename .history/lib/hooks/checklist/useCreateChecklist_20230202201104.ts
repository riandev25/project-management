import { useMutation, useQueryClient } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useCreateChecklist = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().createChecklist,
    onSuccess: () => {
      queryClient.invalidateQueries(['checklists']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
