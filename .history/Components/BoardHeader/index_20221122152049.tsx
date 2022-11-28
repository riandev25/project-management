import TransparentBtn from '../../UI/Buttons/TransparentBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <input
        type='text'
        defaultValue='PM'
        className='flex text-base w-12 font-bold text-center'
      />
      <button
        type='button'
        className='bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
      >
        {/* <FontAwesomeIcon icon={icon} /> */}
        <span>asd</span>
      </button>
      <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' />
    </section>
  );
};

export default BoardHeader;
