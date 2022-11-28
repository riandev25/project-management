import DarkBtn from '../../UI/Buttons/DarkBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faUser,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BoardHeader = () => {
  return (
    <div>
      <section className='flex flex-row gap-3 justify-start items-center'>
        <div>PM</div>
        <button
          type='button'
          className='flex justify-center items-center gap-2 bg-gray-500 rounded-md text-sm text-white font-medium space-x-1 p-2'
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <DarkBtn icon={faStar} />
        <DarkBtn icon={faUser} label='Workspace visible' />
        <div className='flex flex-row gap-2'>
          <DarkBtn icon={faChartBar} label='Board' />
          <DarkBtn icon={faChevronDown} />
        </div>
      </section>
    </div>
  );
};

export default BoardHeader;
