import { useQuery } from '@tanstack/react-query';
import { ILabel } from '../../../interfaces/label.interface';
import labelService from '../../../services/labelService';

export const useGetLabels = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery<ILabel[]>({
    queryKey: ['labels'],
    queryFn: labelService().getLabels,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
