import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';

const CardChild = () => {
  return (
    <div className='flex flex-row py-2 px-2 rounded-sm bg-white'>
      <div className='flex flex-col w-full gap-2 shadow-sm'>
        <section className='grid grid-cols-5 gap-0.5'>
          <span className='h-2 bg-green-600 rounded-sm'></span>
        </section>
        <section className='text-gray-700'>Product Owner</section>
        <section className='text-gray-700'>
          <FontAwesomeIcon icon={faPaperclip} size='sm' />
        </section>
      </div>
      <button type='button'>
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <Portal>
        <CardFeaturesModal />
      </Portal>
    </div>
  );
};

export default CardChild;
