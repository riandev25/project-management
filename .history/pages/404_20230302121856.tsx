import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalStorage } from '../lib/utils/localStorage';

const Error404 = () => {
  const email = getLocalStorage('email');

  return (
    <div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-32 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
      <div className='z-20 xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
        <div className='relative'>
          <div className='absolute'>
            <div className='flex flex-col gap-3'>
              <h1 className='my-2 text-gray-800 font-bold text-2xl'>
                Looks like you&apos;ve found the doorway to the great nothing
              </h1>
              <p className='my-2 text-gray-800'>
                Sorry about that! Please visit the user page to get where you
                need to go.
              </p>
              <Link
                href={`u/${email}/boards`}
                className='sm:w-full lg:w-fit my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'
              >
                Take me there!
              </Link>
            </div>
          </div>
          <div>
            <Image
              src='https://i.ibb.co/G9DC8S0/404-2.png'
              alt='error-img-1'
              width={600}
              height={350}
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src='https://i.ibb.co/ck1SGFJ/Group.png'
          alt='error-img-2'
          width={600}
          height={350}
          className='absolute sm:relative'
        />
      </div>
    </div>
  );
};

export default Error404;
