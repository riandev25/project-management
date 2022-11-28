import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const CardChild = () => {
  return (
    <div className='flex flex-row py-1.5 px-1'>
      <div className='flex flex-col gap-2 bg-white shadow-sm'>
        <section className='grid grid-cols-5 gap-0.5'>
          <span className='h-2 bg-green-600 rounded-sm'></span>
        </section>
        <section className='text-gray-700'>Product Owner</section>
        <section className='text-gray-700'>
          <FontAwesomeIcon icon={faPaperclip} />
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default CardChild;
