import TransparentBtn from '../../UI/Buttons/TransparentBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <input
        type='text'
        defaultValue='PM'
        className='flex text-lg w-12 font-bold text-center'
      />
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        <FontAwesomeIcon icon={faStar} />
        <span>HTML</span>
      </button>
      {/* <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' /> */}
    </section>
  );
};

export default BoardHeader;
