import { useQuery } from '@tanstack/react-query';
import labelService from '../../../services/labelService';

export const useGetLabels = () => {
  const { data, isSuccess, isError, isFetching } = useQuery({
    queryKey: ['labels'],
    queryFn: labelService().getLabels,
  });

  return { data, isError, isSuccess, isFetching };
};
