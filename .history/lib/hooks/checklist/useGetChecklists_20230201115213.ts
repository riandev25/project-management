import { useQuery } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useGetChecklists = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['checklists'],
    queryFn: checklistService().getChecklists,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
