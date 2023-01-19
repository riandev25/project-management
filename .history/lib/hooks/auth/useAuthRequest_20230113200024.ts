import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { registerUser } from '../../../services/UserService';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const [postEmail, setPostEmail] = useState(''); // Need for zustand
  const [postPassword, setPostPassword] = useState('');
  const [postResult, setPostResult] = useState<string | null>(null); // Need for zustand

  const emailError = String(errors.email?.message);
  const passwordError = String(errors.password?.message);

  const { isLoading, mutate } = useMutation<any, Error>(
    async () => {
      return await registerUser({
        email: postEmail,
        password: postPassword,
      });
    },
    {
      onSuccess: (res) => {
        setPostResult(formatResponse(res));
      },
      onError: (err: any) => {
        setPostResult(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoading) setPostResult('posting...');
  }, [isLoading]);

  const postData = () => {
    try {
      mutate();
    } catch (err) {
      setPostResult(formatResponse(err));
    }
  };

  const onSubmitHandler = (data: FieldValues, e: any) => {
    e.preventDefault();
    setPostEmail(data.email);
    setPostPassword(data.password);
    const resData = postData();
    setPostResult(formatResponse(resData));
    reset();
  };

  return {
    handleSubmit,
    onSubmitHandler,
    register,
    errors,
    emailError,
    passwordError,
  };
};
