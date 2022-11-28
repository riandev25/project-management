import TransparentBtn from '../../UI/Buttons/TransparentBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2'>
      <input
        type='text'
        defaultValue='PM'
        className='flex justify-center items-center text-lg font-bold'
      />
      <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' />
    </section>
  );
};

export default BoardHeader;
