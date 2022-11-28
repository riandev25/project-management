import DarkBtn from '../../UI/Buttons/DarkBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <div>PM</div>
      {/* <DarkBtn icon={faStar} />
      <DarkBtn icon={faUser} label='Workspace visible' /> */}
      <button
        type='button'
        className='text-white font-medium rounded-lg text-sm p-2 bg-gray-800'
      >
        <FontAwesomeIcon icon={faStar} className='backdrop-blur-[10px]' />
      </button>
    </section>
  );
};

export default BoardHeader;
