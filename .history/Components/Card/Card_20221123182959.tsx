import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import BlueBtn from '../../UI/Buttons/BlueBtn';
import CardAddForm from './CardAddForm';
import { useContext } from 'react';
import { useAddCardChildContext } from '../../lib/hooks/useAddCardChild';

const Card = () => {
  const { AddCardChildState, openCardChildForm, closeCardChildForm } =
    useContext(useAddCardChildContext);
  const { isOpen } = AddCardChildState;
  console.log(AddCardChildState);

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
      {!isOpen && <CardAddForm />}
    </div>
  );
};

export default Card;
