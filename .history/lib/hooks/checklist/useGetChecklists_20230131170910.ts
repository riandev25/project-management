import { useQuery } from '@tanstack/react-query';
import { IChecklistObject } from '../../../interfaces/checklist';
import checklistService from '../../../services/checklistService';

export const useGetChecklists = () => {
  const { data, isSuccess, isError, isFetching, refetch } = useQuery({
    queryKey: ['checklists'],
    queryFn: checklistService().getChecklists,
  });

  return { data, isError, isSuccess, isFetching, refetch };
};
