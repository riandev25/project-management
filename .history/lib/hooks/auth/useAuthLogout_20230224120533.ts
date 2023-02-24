import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../services/authService';

export const useAuthLogout = () => {
  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: authService().logoutUser,
  });

  return { isLoading, mutateAsync, isSuccess };
};
