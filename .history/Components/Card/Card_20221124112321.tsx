import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import CardAddForm from './CardAddForm';
import { useContext } from 'react';
import { useCardContext } from '../../lib/hooks/useCardContext';
import CardOptions from './CardOptions';

const Card = () => {
  const { CardState, openCardChildForm, closeCardChildForm } =
    useContext(useCardContext);
  const { isFormOpen } = CardState;

  const BASIC_OPTIONS = [
    'Add card...',
    'Copy list...',
    'Move list...',
    'Watch',
  ];

  return (
    <div className='relative flex flex-col w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-md text-sm text-gray-700'>
      <header className='flex flex-row justify-between items-center py-2.5 px-1.5'>
        <h2 className='font-semibold'>Backlog</h2>
        <button type='button' className='h-full px-1.5 hover:bg-gray-400'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </header>

      <section className='flex flex-col w-full gap-[2px]'>
        <CardChild />
      </section>
      {!isFormOpen && (
        <section className='flex flex-row gap-2 mt-2.5 text-gray-500'>
          <button
            type='button'
            className='w-full text-start rounded-sm py-1.5 px-2 space-x-2 hover:bg-gray-400'
            onClick={openCardChildForm}
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
      )}
      {isFormOpen && <CardAddForm closeCardChildForm={closeCardChildForm} />}
      <CardOptions />
    </div>
  );
};

export default Card;
