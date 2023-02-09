import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../../../services/AuthService';

export const useAuthLogout = () => {
  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: logoutUser,
  });

  return { isLoading, mutateAsync, isSuccess };
};
