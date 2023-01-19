import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { registerUser } from '../../../services/UserService';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthRegister = () => {
  const router = useRouter();

  const {
    register: registerRegistration,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: errorsRegister },
    reset: resetRegister,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const [postEmail, setPostEmail] = useState(''); // Need for zustand
  const [postPassword, setPostPassword] = useState('');
  const [registerResult, setRegisterResult] = useState<string | null>(null); // Need for zustand

  const emailErrorRegister = String(errorsRegister.email?.message);
  const passwordErrorRegister = String(errorsRegister.password?.message);

  // Register user

  const { isLoading: registerLoading, mutate: registerMutate } = useMutation<
    any,
    Error
  >(
    async () => {
      return await registerUser({
        email: postEmail,
        password: postPassword,
      });
    },
    {
      onSuccess: (res) => {
        setRegisterResult(formatResponse(res));
      },
      onError: (err: any) => {
        setRegisterResult(formatResponse(err.response?.data || err));
      },
    }
  );

  const registerUserRequest = () => {
    try {
      registerMutate();
    } catch (err) {
      setRegisterResult(formatResponse(err));
    }
  };

  const registerSubmitHandler = (data: FieldValues, e: any) => {
    e.preventDefault();
    setPostEmail(data.email);
    setPostPassword(data.password);
    const resData = registerUserRequest();
    setRegisterResult(formatResponse(resData));
    resetRegister();
  };

  // const { isLoading: loginLoading, mutate: loginMutate } = useMutation<any, Error>(
  //   async () => {
  //     return await registerUser({
  //       email: postEmail,
  //       password: postPassword,
  //     });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       setPostResult(formatResponse(res));
  //     },
  //     onError: (err: any) => {
  //       setPostResult(formatResponse(err.response?.data || err));
  //     },
  //   }
  // );

  // useEffect(() => {
  //   if (registerLoading) setRegisterResult('posting...');
  // }, [registerLoading]);

  useEffect(() => {
    if (registerResult) router.push('/auth/login');
  });

  return {
    handleRegisterSubmit,
    registerSubmitHandler,
    registerRegistration,
    errorsRegister,
    emailErrorRegister,
    passwordErrorRegister,
    registerLoading,
  };
};
