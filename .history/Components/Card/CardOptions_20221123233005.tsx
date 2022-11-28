import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardOptionsBtn from '../../UI/Buttons/CardOptionsBtn';

const CardOptions = () => {
  return (
    <div className='absolute w-72 bg-white translate-x-64 translate-y-8'>
      <header className='relative text-center'>
        <h2>List of Actions</h2>
        <button type='button' className='absolute top-1/2 right-0'>
          <FontAwesomeIcon icon={faXmark} size='1x' />
        </button>
      </header>
      <section>
        <CardOptionsBtn operation='Add card...' />
      </section>
    </div>
  );
};
export default CardOptions;
