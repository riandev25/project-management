import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { ILoginResult } from '../../../interfaces/user.interface';
import {
  loginUser,
  registerUser,
  // useLoginUser,
} from '../../../services/AuthService';
import { useAuthLoginStore, useAuthStore } from '../../../store/authStore';
import { authSchema } from '../../utils/authSchema';
import { formatEmail } from '../../utils/formatEmail';

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
  const [redirect, setRedirect] = useState(false);

  const emailErrorLogin = String(errorsLogin.email?.message);
  const passwordErrorLogin = String(errorsLogin.password?.message);

  const {
    loginErr,
    loginErrStatus,
    email,
    updateEmail,
    updateApiKey,
    updateLoginErr,
    updateLoginErrStatus,
  } = useAuthLoginStore(
    (state) => ({
      loginErr: state.loginErr,
      loginErrStatus: state.loginErrStatus,
      updateLoginErr: state.updateLoginErr,
      updateLoginErrStatus: state.updateLoginErrStatus,
      email: state.email,
      updateEmail: state.updateEmail,
      apiKey: state.apiKey,
      updateApiKey: state.updateApiKey,
    }),
    shallow
  );

  // const { email, updateEmail } = useAuthStore(
  //   (state) => ({
  //     email: state.email,
  //     updateEmail: state.updateEmail,
  //   }),
  //   shallow
  // );

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
        if (responseData.response.status === '401') {
          updateLoginErr(responseData.response.data);
          updateLoginErrStatus();
        } else {
          updateEmail(responseData.user.email);
          updateApiKey(responseData.user.email);
          resetLogin();
          setRedirect(true);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formattedEmail = formatEmail(email);

  useEffect(() => {
    if (redirect) {
      router.push(`/u/${formattedEmail}/boards`);
    }
  }, [formattedEmail, redirect, router]);

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
