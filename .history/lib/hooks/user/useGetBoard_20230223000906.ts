import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';
import userService from '../../../services/userService';
import { userStore } from '../../../store/userStore';
import { IBoardData } from '../../../interfaces/board.interface';

export const useGetBoard = () => {
  const { data, isSuccess, isLoading, isError } = useQuery<IBoardData[]>({
    queryKey: ['boards-list'],
    queryFn: userService().getBoard,
  });

  return { data, isSuccess, isLoading, isError };
};
