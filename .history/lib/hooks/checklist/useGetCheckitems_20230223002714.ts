import { useQuery } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';
import { IChecklistStateObject } from '../../../store/checklistStore';

export const useGetCheckitems = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery<
    IChecklistStateObject[]
  >({
    queryKey: ['checkitems'],
    queryFn: checklistService().getCheckitems,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
