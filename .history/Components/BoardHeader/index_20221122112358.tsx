import TransparentBtn from '../../UI/Buttons/TransparentBtn';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

const BoardHeader = () => {
  return (
    <section className='flex flex-row gap-2 just'>
      <input
        type='text'
        defaultValue='PM'
        className='flex text-lg w-12 font-bold text-center'
      />
      <button className='bg-red-400'>asd</button>
      {/* <TransparentBtn icon={faStar} />
      <TransparentBtn icon={faUser} label='Workspace visible' /> */}
    </section>
  );
};

export default BoardHeader;
