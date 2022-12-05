import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const CardChild = () => {
  return (
    <div className='flex flex-row py-3 px-2 bg-white'>
      <div className='flex flex-col w-full gap-1 shadow-sm'>
        <section className='grid grid-cols-5 gap-0.5'>
          <span className='h-2 bg-green-600 rounded-sm'></span>
        </section>
        <section className='text-gray-700'>Product Owner</section>
        <section className='text-gray-700'>
          <FontAwesomeIcon icon={faPaperclip} />
        </section>
      </div>
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
};

export default CardChild;