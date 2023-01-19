import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { logoutUser } from '../../../services/UserService';

export const useAuthLogout = () => {
  const router = useRouter();

  const {
    mutateAsync,
    isLoading: loginLoading,
    data,
    isSuccess,
  } = useMutation({
    mutationKey: ['logoutuser'],
    mutationFn: logoutUser,
  });

  const logoutSubmitHandler = async (data: FieldValues, e: any) => {
    try {
      e.preventDefault();
      if (data) {
        await mutateAsync();
      }
    } catch (err) {
      throw new Error('Logout failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(`/auth/login`);
    }
  });

  return logoutSubmitHandler;
};
