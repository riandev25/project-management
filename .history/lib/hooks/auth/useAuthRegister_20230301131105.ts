import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { authService } from '../../../services/authService';
import { useAuthRegisterStore } from '../../../store/authStore';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthRegister = () => {
  const {
    mutateAsync,
    isLoading: registerLoading,
    isError,
    data,
  } = useMutation({
    mutationKey: ['register-user'],
    mutationFn: authService().registerUser,
  });

  // const { registerErrStatus, updateRegisterErr, updateRegisterErrStatus } =
  //   useAuthRegisterStore(
  //     (state) => ({
  //       registerErrStatus: state.registerErrStatus,
  //       updateRegisterErr: state.updateRegisterErr,
  //       updateRegisterErrStatus: state.updateRegisterErrStatus,
  //     }),
  //     shallow
  //   );

  // const registerSubmitHandler = async (data: FieldValues, e: any) => {
  //   console.log(data);
  //   try {
  //     e.preventDefault();
  //     // if (registerErrStatus === true) updateRegisterErrStatus();
  //     if (data) {
  //       console.log(data);
  //       const responseData = await mutateAsync({
  //         username: data.username,
  //         password: data.password,
  //       });
  //       console.log(responseData);
  //       if (responseData.response) {
  //         updateRegisterErr(responseData.response.data.msg);
  //         updateRegisterErrStatus();
  //         return;
  //       }
  //       resetLogin();
  //       setRedirect(true);
  //     }
  //   } catch (err) {
  //     throw new Error('Registration failed');
  //   }
  // };

  // useEffect(() => {
  //   if (redirect) router.push('/auth/login');
  // }, [redirect, router]);

  return {
    // handleRegisterSubmit,
    // registerSubmitHandler,
    // registerRegistration,
    isError,
    // emailErrorRegister,
    // passwordErrorRegister,
    mutateAsync,
    registerLoading,
  };
};
