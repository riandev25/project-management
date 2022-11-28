import TransparentBtn from '../../UI/Buttons/TransparentBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' />
    </section>
  );
};

export default BoardHeader;
