import { useMutation, useQuery } from '@tanstack/react-query';
import { formatResponse } from '../../utils/formatResponse';

interface IUseFetchData {
  fetchService: () => Promise<any>;
  queryKey: any;
}

export const useQueryData = ({ fetchService, queryKey }: IUseFetchData) => {
  const { isLoading, refetch, isError } = useQuery<any, Error>({
    queryKey: [queryKey],
    queryFn: () => fetchService(),
  });

  const data = formatResponse(refetch());

  return {
    isLoading,
    data,
    isError,
  };
};
