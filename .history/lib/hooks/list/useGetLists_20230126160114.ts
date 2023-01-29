import { useQuery } from '@tanstack/react-query';
import { listService } from '../../../services/listService';

export const useGetLists = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['lists'],
    queryFn: listService().getLists,
  });

  return { data, isSuccess, isError };
};
