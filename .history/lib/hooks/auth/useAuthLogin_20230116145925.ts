import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { ILoginResult } from '../../../interfaces/user.interface';
import {
  loginUser,
  registerUser,
  // useLoginUser,
} from '../../../services/UserService';
import { useAuthStore } from '../../../store/authStore';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthLogin = () => {
  const router = useRouter();

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: errorsLogin },
    reset: resetLogin,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const [loginResult, setLoginResult] = useState<ILoginResult | null>(null); // Need for zustand

  const emailErrorLogin = String(errorsLogin.email?.message);
  const passwordErrorLogin = String(errorsLogin.password?.message);

  // Login User

  const { mutateAsync, isLoading: loginLoading } = useMutation({
    mutationKey: ['loginuser'],
    mutationFn: loginUser,
  });

  const loginSubmitHandler = async (data: FieldValues, e: any) => {
    try {
      e.preventDefault();
      if (data) {
        const responseData = await mutateAsync({
          email: data.email,
          password: data.password,
        });
        setLoginResult(responseData);
        useAuthStore.setState({
          email: responseData.user.email,
          apiKey: responseData.user.apiKey,
        });
        resetLogin();
      }
    } catch (err) {
      throw new Error('Authentication failed');
    }
  };

  const email = useAuthStore((state) => state.email);

  useEffect(() => {
    if (email) {
      router.push(`/u/${email}/boards`);
    }
  });

  return {
    handleLoginSubmit,
    loginSubmitHandler,
    registerLogin,
    errorsLogin,
    emailErrorLogin,
    passwordErrorLogin,
    loginLoading,
    loginResult,
  };
};
