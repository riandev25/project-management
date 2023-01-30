import { useQuery } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useGetLabels = () => {
  const { data, isSuccess, isError, isFetching, refetch } = useQuery({
    queryKey: ['checklists'],
    queryFn: checklistService().getChecklists,
  });

  return { data, isError, isSuccess, isFetching, refetch };
};
