import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import BlueBtn from '../../UI/Buttons/BlueBtn';
import CardAddForm from './CardAddForm';
import { useContext } from 'react';
import { useAddCardChildContext } from '../../lib/hooks/useAddCardChild';
import CardOptions from './CardOptions';
import CardOptionsBtn from '../../UI/Buttons/CardOptionsBtn';

const Card = () => {
  const { AddCardChildState, openCardChildForm, closeCardChildForm } =
    useContext(useAddCardChildContext);
  const { isOpen } = AddCardChildState;
  console.log(AddCardChildState);

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
        {/* <CardOptions /> */}
        {/* <div className='absolute w-72 bg-white text-gray-500 translate-x-56'>
          <header className='relative py-2 mx-2 border-b text-center'>
            <h2>List of Actions</h2>
            <button type='button' className='absolute top-2 right-0'>
              <FontAwesomeIcon icon={faXmark} size='lg' />
            </button>
          </header>
          <section className='py-1'>
            {BASIC_OPTIONS.map((item) => {
              return <CardOptionsBtn key={item} operation={item} />;
            })}
          </section>
        </div> */}
      </header>

      <section className='flex flex-col w-full gap-[2px]'>
        <CardChild />
      </section>
      {!isOpen && (
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
      {isOpen && <CardAddForm closeCardChildForm={closeCardChildForm} />}
    </div>
  );
};

export default Card;
