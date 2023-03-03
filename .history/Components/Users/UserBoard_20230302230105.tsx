import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useAuthLogout } from '../../lib/hooks/auth/useAuthLogout';
import { getLocalStorage } from '../../lib/utils/localStorage';
import { userStore } from '../../store/userStore';
import BoardList from './BoardList';

const UserBoard = () => {
  const { mutateAsync, isLoading, isSuccess } = useAuthLogout();

  const router = useRouter();
  const { user } = router.query;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { toggleModal, isModalOpen } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const logoutSubmitHandler = async () => {
    await mutateAsync();
  };

  useEffect(() => {
    console.log(router.isReady);
    if (router.isReady) {
      console.log('ok');
      const jwtToken = getLocalStorage('jwtToken');
      const email = getLocalStorage('email');
      console.log(jwtToken);
      // console.log(email);
      if (!jwtToken) {
        router.push('/auth/login');
      } else if (email !== router.query.user) {
        console.log(`email ${email}`);
        console.log(`user ${router.query.user}`);

        // router.push('/404');
      } else {
        setIsLoggedIn(true);
      }
    }
  }, [router, router.isReady]);

  if (!isLoggedIn) return <p></p>;

  return (
    <div className='relative flex flex-row justify-center w-full min-h-screen py-12 bg-gray-800'>
      <BoardList />
      <button
        className='absolute top-4 right-4 text-sm sm:text-base font-light text-gray-300 hover:text-gray-800 px-2 py-1 xs:px-4 xs:py-2 bg-transparent border border-gray-300 transition-colors rounded-md hover:bg-gray-300'
        type='button'
        onClick={logoutSubmitHandler}
      >
        Logout
      </button>
      {isModalOpen ? (
        <div
          onClick={toggleModal}
          className='z-20 absolute top-0 left-0 w-screen min-h-screen h-full bg-black opacity-70'
        ></div>
      ) : null}
    </div>
  );
};
export default UserBoard;
