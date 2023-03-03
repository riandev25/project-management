import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AuthRegisterForm from './AuthRegisterForm';
import AuthLoginForm from './AuthLoginForm';
import ErrorAlert from '../../UI/Modal/ErrorAlert';
import { useAuthRegisterStore, useAuthLoginStore } from '../../store/authStore';
import { shallow } from 'zustand/shallow';
import Link from 'next/link';
import {
  getLocalStorage,
  removeLocalStorage,
} from '../../lib/utils/localStorage';
import { useAuthLogin } from '../../lib/hooks/auth/useAuthLogin';

const AuthMainComponent = () => {
  const router = useRouter();
  const path = router.asPath;

  const { registerErrStatus, updateRegisterErrStatus } = useAuthRegisterStore(
    (state) => ({
      registerErr: state.registerErr,
      registerErrStatus: state.registerErrStatus,
      updateRegisterErrStatus: state.updateRegisterErrStatus,
    }),
    shallow
  );

  const { loginErrStatus, updateLoginErrStatus } = useAuthLoginStore(
    (state) => ({
      loginErr: state.loginErr,
      loginErrStatus: state.loginErrStatus,
      updateLoginErrStatus: state.updateLoginErrStatus,
    }),
    shallow
  );

  // Redirect to home page if the user is logged in
  useEffect(() => {
    const jwtToken = getLocalStorage('jwtToken');
    const email = getLocalStorage('email');
    if (jwtToken && email) {
      router.push(`/u/${email}/boards`);
    }
  }, [router]);

  const { isLoginSuccess } = useAuthLogin();

  if (isLoginSuccess)
    return (
      <div className='relative flex items-center min-h-screen w-screen justify-center'>
        <p className='text-lg'>Logging in. Please wait ...</p>
      </div>
    );

  return (
    <div className='relative flex items-center min-h-screen p-4 bg-gray-300 lg:justify-center overflow-x-hidden'>
      <div className='relative flex flex-col overflow-x-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
        <section className='p-4 py-6 text-white bg-blue-700 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
          <h1 className='my-3 text-4xl font-bold tracking-wider text-center'>
            <a href='#'>Task Accio</a>
          </h1>
          <p className='mt-6 font-semibold text-center text-gray-300 md:mt-0'>
            A project/task management tool inspired from Trello. Uploading
            images and drag and drop are the new features added. Drag and drop
            for checklist is also available, make sure to check that out. Login
            is required to access the app.
          </p>
          <p className='mt-6 pt-3 text-sm font-normal text-center text-gray-300 md:mt-0'>
            Don&apos;t want to use your actual email? Don&apos;t worry because
            this login system doesn&apos;t have email verification. You can just
            log any email you want as long as it&apos;s valid. Your password
            will be hashed, this means your actual password will not reflect in
            the database for your privacy and security.
          </p>
          {path !== '/auth/register/' ? (
            <p className='flex flex-col items-center justify-center mt-10 text-center'>
              <span>Dont have an account?</span>
              <Link href='/auth/register' className='underline'>
                Get Started!
              </Link>
            </p>
          ) : (
            <p className='flex flex-col items-center justify-center mt-10 text-center'>
              <span>Already have an account?</span>
              <Link href='/auth/login' className='underline'>
                Login here!
              </Link>
            </p>
          )}
          {/* <p className='mt-6 text-sm text-center text-gray-300'>
            Read our{' '}
            <a href='#' className='underline'>
              terms
            </a>{' '}
            and{' '}
            <a href='#' className='underline'>
              conditions
            </a>
          </p> */}
        </section>
        <section className='p-5 bg-white md:flex-1'>
          <h3 className='my-4 text-2xl font-semibold text-gray-700'>
            {path === '/auth/register/'
              ? 'Account Registration'
              : 'Account Login'}
          </h3>
          {path === '/auth/register/' ? (
            <AuthRegisterForm />
          ) : (
            <AuthLoginForm />
          )}
        </section>
      </div>
      {registerErrStatus ? (
        <div className='w-[calc(100vw-16px)] h-screen absolute top-0 left-0 flex justify-center items-center overflow-x-hidden'>
          {/* {loginErrStatus ? ( */}
          <ErrorAlert
            errorMsg='Registration failed'
            additionalMsg='User already exist'
            closeAlert={updateRegisterErrStatus}
          />
          {/* ) : null} */}
        </div>
      ) : null}
      {loginErrStatus ? (
        <div className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center overflow-x-hidden'>
          {/* {loginErrStatus ? ( */}
          <ErrorAlert
            errorMsg='Login failed'
            additionalMsg='User not found'
            closeAlert={updateLoginErrStatus}
          />
          {/* ) : null} */}
        </div>
      ) : null}
    </div>
  );
};

export default AuthMainComponent;
