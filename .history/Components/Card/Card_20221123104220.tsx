import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import BlueBtn from '../../UI/Buttons/BlueBtn';

const Card = () => {
  return (
    <div className='flex flex-col w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-md text-sm text-gray-700'>
      <header className='flex flex-row justify-between items-center py-2.5 px-1.5'>
        <h2 className='font-semibold '>Backlog</h2>
        <FontAwesomeIcon icon={faEllipsis} />
      </header>

      <section className='flex flex-col w-full gap-[2px]'>
        <CardChild />
      </section>
      <section className='flex flex-row gap-2 my-2.5 text-gray-500'>
        <button
          type='button'
          className='w-full text-start rounded-sm py-1.5 px-2 hover:bg-gray-400'
        >
          <FontAwesomeIcon icon={faAdd} />
          <span>Add a card</span>
        </button>
        <button
          type='button'
          className='py-1.5 px-2 rounded-sm hover:bg-gray-400'
        >
          <FontAwesomeIcon icon={faFile} />
        </button>
      </section>
      <form className='flex flex-col w-full gap-2 text-gray-500'>
        <textarea className='h-auto flex'></textarea>
        <div className='flex justify-between items-center'>
          <section className='flex flex-row justify-start items-center gap-2'>
            <button
              type='submit'
              className='bg-blue-600 py-1.5 px-2 rounded-sm text-white'
            >
              Add card
            </button>
            <button type='button'>
              <FontAwesomeIcon icon={faXmark} size='2x' />
            </button>
          </section>
          <button type='button'>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
