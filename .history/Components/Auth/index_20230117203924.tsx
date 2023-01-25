import { useRouter } from 'next/router';
import React from 'react';
import AuthRegisterForm from './AuthRegisterForm';
import AuthLoginForm from './AuthLoginForm';
import ErrorAlert from '../../UI/Modal/ErrorAlert';
import { useAuthStore } from '../../store/authStore';
import { shallow } from 'zustand/shallow';

const AuthMainComponent = () => {
  const router = useRouter();
  const path = router.asPath;

  // const registerErr = useAuthStore((state) => state.registerErr);
  // const registerErrStatus = useAuthStore((state) => state.registerErrStatus);

  const { registerErr, registerErrStatus, updateRegisterErrStatus } =
    useAuthStore(
      (state) => ({
        registerErr: state.registerErr,
        registerErrStatus: state.registerErrStatus,
        updateRegisterErrStatus: state.updateRegisterErrStatus,
      }),
      shallow
    );

  return (
    <div className='relative flex items-center min-h-screen p-4 bg-gray-300 lg:justify-center'>
      <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
        <section className='p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
          <h1 className='my-3 text-4xl font-bold tracking-wider text-center'>
            <a href='#'>Task Accio</a>
          </h1>
          <p className='mt-6 font-normal text-center text-gray-300 md:mt-0'>
            A project/task management tool inspired from Trello. Uploading files
            and images are the new features added. Login is required to move
            forward to the next page.
          </p>
          <p className='mt-6 pt-3 text-sm font-normal text-center text-gray-300 md:mt-0'>
            Dont want to use your actual email? Dont worry because this login
            system doesnt have email verification. You can just log any email
            you want as it is valid.
          </p>
          {path === '/auth/login' ? (
            <p className='flex flex-col items-center justify-center mt-10 text-center'>
              <span>Dont have an account?</span>
              <a href='#' className='underline'>
                Get Started!
              </a>
            </p>
          ) : null}
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
            {path === '/auth/register'
              ? 'Account Registration'
              : 'Account Login'}
          </h3>
          {path === '/auth/register' ? <AuthRegisterForm /> : <AuthLoginForm />}
        </section>
      </div>
      {registerErrStatus ? (
        <ErrorAlert
          errorMsg='Registration failed'
          additionalMsg={registerErr}
          closeAlert={updateRegisterErrStatus}
        />
      ) : null}
    </div>
  );
};

export default AuthMainComponent;