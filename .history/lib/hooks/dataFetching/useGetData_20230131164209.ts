import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';
import { InterfaceDeclaration } from 'typescript';
import checklistService from '../../../services/checklistService';

// interface IGetData {
//   queryKey: [string];
// }

export const useGetData: any = (queryKey: QueryKey, queryFn: QueryFunction) => {
  const { data, isSuccess, isError, isFetching, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, isError, isSuccess, isFetching, refetch };
};
