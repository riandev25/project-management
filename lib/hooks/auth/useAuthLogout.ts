import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { logoutUser } from '../../../services/AuthService';

export const useAuthLogout = () => {
  const router = useRouter();

  const {
    mutateAsync,
    isLoading: isLogoutLoading,
    data,
    isSuccess,
  } = useMutation({
    mutationKey: ['logoutuser'],
    mutationFn: logoutUser,
  });

  const logoutSubmitHandler = async (e: any) => {
    try {
      e.preventDefault();
      await mutateAsync();
    } catch (err) {
      throw new Error('Logout failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(`/auth/login`);
    }
  });

  return { logoutSubmitHandler, isLogoutLoading };
};
