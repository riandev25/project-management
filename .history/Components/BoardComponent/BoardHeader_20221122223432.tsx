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
      <section className='flex flex-row gap-4 justify-start items-center'>
        <div>PM</div>
        <DarkBtn icon={faStar} />
        <DarkBtn icon={faUser} label='Workspace visible' />
        <div className='flex flex-row gap-1'>
          <DarkBtn icon={faChartBar} label='Board' />
          <DarkBtn icon={faChevronDown} />
        </div>
      </section>
    </div>
  );
};

export default BoardHeader;
