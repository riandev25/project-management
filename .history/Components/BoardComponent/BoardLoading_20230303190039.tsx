import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoardHeader from './BoardHeader';

const BoardLoading = () => {
  const LOADING_DATA = [
    {
      data: '',
    },
    {
      data: '',
    },
  ];

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <FontAwesomeIcon
        icon={faSpinner}
        size='3x'
        className='fa-pulse text-gray-300'
      />
    </div>
  );
};

export default BoardLoading;
