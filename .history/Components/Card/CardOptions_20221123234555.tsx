import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardOptionsBtn from '../../UI/Buttons/CardOptionsBtn';

const CardOptions = () => {
  return (
    <div className='absolute w-72 bg-white text-gray-500 translate-x-64 translate-y-8'>
      <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button type='button' className='absolute top-1/2 right-0'>
          <FontAwesomeIcon icon={faXmark} size='sm' />
        </button>
      </header>
      <section className='py-1'>
        <CardOptionsBtn operation='Add card...' />
      </section>
    </div>
  );
};
export default CardOptions;
