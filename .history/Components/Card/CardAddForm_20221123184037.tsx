import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface prop {
  closeCardChildForm(): void;
}

const CardAddForm = ({ closeCardChildForm }: prop) => {
  return (
    <form className='flex flex-col w-full h-12 my-2.5 gap-2 text-gray-500'>
      <span
        role='textbox'
        className='py-2.5 px-2 bg-white'
        contentEditable
      ></span>
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-2'>
          <button
            type='submit'
            className='bg-blue-600 py-1.5 px-2 rounded-sm text-white'
          >
            Add card
          </button>
          <button type='button' onClick={closeCardChildForm}>
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </button>
        </section>
        <button type='button'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </form>
  );
};
export default CardAddForm;
