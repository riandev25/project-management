import DarkBtn from '../../UI/Buttons/DarkBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <div>PM</div>
      <DarkBtn icon={faStar} />
      <DarkBtn icon={faUser} label='Workspace visible' />
    </section>
  );
};

export default BoardHeader;
