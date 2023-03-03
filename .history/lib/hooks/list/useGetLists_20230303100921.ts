import { useQuery } from '@tanstack/react-query';
import { listService } from '../../../services/listService';
import { IBoardData } from '../../../interfaces/board.interface';

export const useGetLists = () => {
  const { data, isSuccess, isError, isLoading } = useQuery<IBoardData[]>({
    queryKey: ['lists'],
    queryFn: listService().getLists,
  });

  return { data, isSuccess, isError, isLoading };
};
