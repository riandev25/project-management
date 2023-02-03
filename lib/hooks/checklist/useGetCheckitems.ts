import { useQuery } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useGetCheckitems = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['checkitems'],
    queryFn: checklistService().getCheckitems,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
