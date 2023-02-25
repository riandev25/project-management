import DarkBtn from '../../UI/Buttons/DarkBtn';
import {
  faStar,
  faUser,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const BoardHeader = () => {
  const router = useRouter();

  const { mutateAsync, isLoading, isSuccess } = useAuthLogout();

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
    }
  }, [isSuccess, router]);

  return (
    <div>
      <section className='flex flex-row gap-4 justify-between items-center sm:px-4'>
        <h3 className='text-lg text-gray-200 font-bold'>PM</h3>
        {/* <DarkBtn icon={faStar} />
        <DarkBtn icon={faUser} label='Workspace visible' />
        <div className='flex flex-row gap-1'>
          <DarkBtn icon={faChartBar} label='Board' />
          <DarkBtn icon={faChevronDown} />
        </div> */}
        <button
          type='button'
          onClick={logoutHandler}
          className=' text-sm sm:text-base font-light text-gray-300 hover:text-gray-800 px-2 py-1 xs:px-4 xs:py-2 bg-transparent border border-gray-300 transition-colors rounded-md hover:bg-gray-300'
        >
          {isLoading ? 'Processing...' : 'Logout'}
        </button>
      </section>
    </div>
  );
};

export default BoardHeader;
