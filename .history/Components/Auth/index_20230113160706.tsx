import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authSchema } from '../../lib/utils/authSchema';
import { IAuth } from '../../interfaces/auth.interface';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../services/UserService';
import { IUser } from '../../interfaces/user.interface';
import { formatResponse } from '../../lib/utils/formatResponse';
import AuthForm from './AuthForm';

const AuthMainComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
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
    const a = postData();
    setPostResult(formatResponse(a));
    reset();
  };

  return (
    <div className='flex items-center min-h-screen p-4 bg-gray-300 lg:justify-center'>
      <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
        <section className='p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
          <h1 className='my-3 text-4xl font-bold tracking-wider text-center'>
            <a href='#'>{postResult}</a>
          </h1>
          <p className='mt-6 font-normal text-center text-gray-300 md:mt-0'>
            A project/task management tool inspired from Trello. Uploading files
            and images are the new features added. Login is required to forward
            to the next page.
          </p>
          <p className='flex flex-col items-center justify-center mt-10 text-center'>
            <span>Dont have an account?</span>
            <a href='#' className='underline'>
              Get Started!
            </a>
          </p>
          <p className='mt-6 text-sm text-center text-gray-300'>
            Read our{' '}
            <a href='#' className='underline'>
              terms
            </a>{' '}
            and{' '}
            <a href='#' className='underline'>
              conditions
            </a>
          </p>
        </section>
        <section className='p-5 bg-white md:flex-1'>
          <h3 className='my-4 text-2xl font-semibold text-gray-700'>
            Account Login
          </h3>
          <AuthForm />
        </section>
      </div>
    </div>
  );
};

export default AuthMainComponent;