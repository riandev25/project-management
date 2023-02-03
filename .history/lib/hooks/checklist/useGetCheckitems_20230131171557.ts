import { useQuery } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useGetCheckitems = () => {
  const { data, isSuccess, isError, isFetching, refetch } = useQuery({
    queryKey: ['checkitems'],
    queryFn: checklistService().getCheckitems,
  });

  return { data, isError, isSuccess, isFetching, refetch };
};
