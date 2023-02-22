import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';
import userService from '../../../services/userService';
import { userStore } from '../../../store/userStore';
import { IBoard } from '../../../interfaces/board';

export const useGetBoard = () => {
  const { data, isSuccess, isLoading, isError } = useQuery<IBoard[]>({
    queryKey: ['boards-list'],
    queryFn: userService().getBoard,
  });

  return { data, isSuccess, isLoading, isError };
};
