import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { ILoginResult } from '../../../interfaces/user.interface';
import { loginUser, registerUser } from '../../../services/UserService';
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

  const [postEmail, setPostEmail] = useState(''); // Need for zustand
  const [postPassword, setPostPassword] = useState('');
  const [loginResult, setLoginResult] = useState<ILoginResult | null>(null); // Need for zustand

  const emailErrorLogin = String(errorsLogin.email?.message);
  const passwordErrorLogin = String(errorsLogin.password?.message);

  // Register user

  const { isLoading: loginLoading, mutate: loginMutate } = useMutation<
    any,
    Error
  >(
    async () => {
      return await loginUser({
        email: postEmail,
        password: postPassword,
      });
    },
    {
      onSuccess: (res) => {
        setLoginResult(formatResponse(res));
      },
      onError: (err: any) => {
        setLoginResult(formatResponse(err.response?.data || err));
      },
    }
  );

  const loginSubmitHandler = (data: FieldValues, e: any) => {
    try {
      e.preventDefault();
      setPostEmail(data.email);
      setPostPassword(data.password);
      console.log(postEmail);
      loginMutate();
      console.log(loginResult);
      resetLogin();
    } catch (err) {
      console.log(err);
    }
  };

  if (loginResult) {
    useAuthStore.setState({
      email: loginResult?.user.email,
      apiKey: loginResult?.user.apiKey,
    });
  }

  const email = useAuthStore((state) => state.email);

  useEffect(() => {
    if (loginResult) {
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
