import DarkBtn from '../../UI/Buttons/DarkBtn';
import {
  faStar,
  faUser,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import { faAnglesLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  getLocalStorage,
  removeLocalStorage,
} from '../../lib/utils/localStorage';

const BoardHeader = () => {
  const router = useRouter();

  const { mutateAsync, isLoading, isSuccess } = useAuthLogout();

  const email = getLocalStorage('email');

  const logoutHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      await mutateAsync();
    } catch (err) {
      console.error('Logout failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/login');
      removeLocalStorage('jwtToken');
      removeLocalStorage('email');
      removeLocalStorage('idBoard');
      removeLocalStorage('boardName');
    }
  }, [isSuccess, router]);

  return (
    <div>
      <section className='flex flex-row gap-4 justify-between items-center sm:px-3'>
        <div className='flex flex-row justify-center items-center gap-4'>
          <Link href={`/u/${email}/boards`}>
            <FontAwesomeIcon
              icon={faAnglesLeft}
              size='2x'
              className='text-blue-500 hover:text-blue-600 transition'
              title='Home page'
            />
          </Link>
          <h3 className='text-lg text-gray-200 font-bold'>PM</h3>
        </div>

        <button
          type='button'
          onClick={logoutHandler}
          className=' text-sm sm:text-base font-light text-gray-300 hover:text-gray-800 px-2 py-1 xs:px-4 xs:py-2 bg-transparent border border-gray-300 transition-colors rounded-md hover:bg-gray-300 focus:font-normal focus:ring-gray-200 focus:ring-2 focus:bg-gray-400 focus:text-gray-800'
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default BoardHeader;