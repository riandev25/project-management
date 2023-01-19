import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { ILoginResult } from '../../../interfaces/user.interface';
import { loginUser, registerUser } from '../../../services/UserService';
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
  const [loginResult, setLoginResult] = useState<ILoginResult>(
    {message: '', apiKey: ''}
  ); // Need for zustand

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
        return formatResponse(res);
      },
      onError: (err: any) => {
        return formatResponse(err.response?.data || err);
      },
    }
  );

  const loginUserRequest = () => {
    try {
      loginMutate();
    } catch (err) {
      formatResponse(err);
    }
  };

  const loginSubmitHandler = (data: FieldValues, e: any) => {
    e.preventDefault();
    setPostEmail(data.email);
    setPostPassword(data.password);
    if (postEmail && postPassword) {
      const resData = loginUserRequest();
      setLoginResult(formatResponse(resData));
    }
    resetLogin();
  };

  useEffect(() => {
    if (loginResult) router.push('/u/');
  });


  return {
    handleLoginSubmit,
    loginSubmitHandler,
    registerLogin,
    errorsLogin,
    emailErrorLogin,
    passwordErrorLogin,
    loginLoading,
  };
};
