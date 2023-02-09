import DarkBtn from '../../UI/Buttons/DarkBtn';
import {
  faStar,
  faUser,
  faChartBar,
} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BoardHeader = () => {
  return (
    <div>
      <section className='flex flex-row gap-4 justify-between items-center px-3'>
        <h1 className='text-lg text-gray-200'>PM</h1>
        {/* <DarkBtn icon={faStar} />
        <DarkBtn icon={faUser} label='Workspace visible' />
        <div className='flex flex-row gap-1'>
          <DarkBtn icon={faChartBar} label='Board' />
          <DarkBtn icon={faChevronDown} />
        </div> */}
        <button
          type='button'
          className='text-base text-gray-800 px-4 py-2 bg-gray-200 border'
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default BoardHeader;
