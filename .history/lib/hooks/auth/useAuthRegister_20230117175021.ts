import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { registerUser } from '../../../services/UserService';
import { useAuthStore } from '../../../store/authStore';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthRegister = () => {
  const router = useRouter();

  // const {
  //   register: registerRegistration,
  //   handleSubmit: handleRegisterSubmit,
  //   formState: { errors: errorsRegister },
  //   reset: resetRegister,
  // } = useForm({
  //   resolver: yupResolver(authSchema),
  // });

  // const [postEmail, setPostEmail] = useState(''); // Need for zustand
  // const [postPassword, setPostPassword] = useState('');
  // const [registerResult, setRegisterResult] = useState<string | null>(null); // Need for zustand

  // const emailErrorRegister = String(errorsRegister.email?.message);
  // const passwordErrorRegister = String(errorsRegister.password?.message);

  // // Register user

  // const { isLoading: registerLoading, mutate: registerMutate } = useMutation<
  //   any,
  //   Error
  // >(
  //   async () => {
  //     return await registerUser({
  //       email: postEmail,
  //       password: postPassword,
  //     });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       setRegisterResult(formatResponse(res));
  //     },
  //     onError: (err: any) => {
  //       setRegisterResult(formatResponse(err.response?.data || err));
  //     },
  //   }
  // );

  // const registerUserRequest = () => {
  //   try {
  //     registerMutate();
  //   } catch (err) {
  //     setRegisterResult(formatResponse(err));
  //   }
  // };

  // const registerSubmitHandler = (data: FieldValues, e: any) => {
  //   e.preventDefault();
  //   setPostEmail(data.email);
  //   setPostPassword(data.password);
  //   const resData = registerUserRequest();
  //   setRegisterResult(formatResponse(resData));
  //   resetRegister();
  // };

  // useEffect(() => {
  //   if (registerResult) router.push('/auth/login');
  // });

  const {
    register: registerRegistration,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: errorsRegister },
    reset: resetLogin,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const emailErrorRegister = String(errorsRegister.email?.message);
  const passwordErrorRegister = String(errorsRegister.password?.message);

  // Login User

  const {
    mutateAsync,
    isLoading: registerLoading,
    isSuccess,
    isError,
    data,
  } = useMutation({
    mutationKey: ['register-user'],
    mutationFn: registerUser,
  });

  const updateRegisterErr = useAuthStore((state) => state.updateRegisterErr);
  const updateRegisterErrStatus = useAuthStore(
    (state) => state.updateRegisterErrStatus
  );

  const registerSubmitHandler = async (data: FieldValues, e: any) => {
    try {
      e.preventDefault();
      if (data) {
        const responseData = await mutateAsync({
          email: data.email,
          password: data.password,
        });
        if (!responseData.message) {
          console.log(responseData);
          updateRegisterErr(responseData.response.data.msg);
          updateRegisterErrStatus(true);
          // useAuthStore.setState({
          //   registerErr: responseData.response.data.msg,
          //   registerErrStatus: true,
          // });
        }
        resetLogin();
      }
    } catch (err) {
      throw new Error('Registration failed');
    }
  };

  // useEffect(() => {
  //   if (isSuccess) router.push('/auth/login');
  // });

  return {
    handleRegisterSubmit,
    registerSubmitHandler,
    registerRegistration,
    errorsRegister,
    emailErrorRegister,
    passwordErrorRegister,
    registerLoading,
    data,
  };
};
