import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';
import userService from '../../../services/userService';
import { userStore } from '../../../store/userStore';

export const useGetBoard = () => {

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['boards-list'],
    queryFn: userService().getBoard,
  });

  return { data, isSuccess, isLoading };
};
