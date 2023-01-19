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

  const [postEmail, setPostEmail] = useState<string | null>(null); // Need for zustand
  const [postPassword, setPostPassword] = useState(null);
  const [loginResult, setLoginResult] = useState<ILoginResult | null>(null); // Need for zustand

  const emailErrorLogin = String(errorsLogin.email?.message);
  const passwordErrorLogin = String(errorsLogin.password?.message);

  // Login User

  const a = useMutation({
    mutationKey: ['loginuser'],
    mutationFn: loginUser,
  });

  const loginLoading = a.isLoading;

  const loginSubmitHandler = async (data: FieldValues, e: any) => {
    try {
      e.preventDefault();
      setPostEmail(data.email);
      setPostPassword(data.password);
      console.log(postEmail);
      const responseData = await a.mutateAsync({
        email: String(postEmail),
        password: String(postPassword),
      });
      setLoginResult(responseData);
      useAuthStore.setState({
        email: loginResult?.user.email,
        apiKey: loginResult?.user.apiKey,
      });
      resetLogin();
    } catch (err) {
      throw new Error('Authentication failed');
    }
  };

  if (loginResult) {
    useAuthStore.setState({
      email: loginResult?.user.email,
      apiKey: loginResult?.user.apiKey,
    });
  }

  const email = useAuthStore((state) => state.email);
  console.log(email);

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
