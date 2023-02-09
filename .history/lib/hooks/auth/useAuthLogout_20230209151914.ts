import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { logoutUser } from '../../../services/AuthService';

export const useAuthLogout = () => {
  const router = useRouter();

  const { mutateAsync, isLoading, data, isSuccess } = useMutation({
    mutationFn: logoutUser,
  });

  useEffect(() => {
    if (isSuccess) {
      router.push(`/auth/login`);
    }
  });

  return { isLoading, mutateAsync };
};
