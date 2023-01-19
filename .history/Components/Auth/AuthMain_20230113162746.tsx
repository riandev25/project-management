import React from 'react';
import AuthForm from './AuthForm';

const AuthForm = () => {
  return (
    <div className='flex items-center min-h-screen p-4 bg-gray-300 lg:justify-center'>
      <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
        <section className='p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
          <h1 className='my-3 text-4xl font-bold tracking-wider text-center'>
            <a href='#'>Task Accio</a>
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

export default AuthForm;
