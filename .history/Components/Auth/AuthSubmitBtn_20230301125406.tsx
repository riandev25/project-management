import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IAuthSubmitBtn } from '../../interfaces/auth.interface';

export const AuthSubmitBtn = ({ btnName, loadingStatus }: IAuthSubmitBtn) => {
  return (
    <button
      type='submit'
      className='w-full flex justify-center items-center px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-700 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4'
    >
      {loadingStatus ? (
        <FontAwesomeIcon icon={faSpinner} className='fa-spin' size='lg' />
      ) : (
        btnName
      )}
    </button>
  );
};
