import { Fragment, useContext } from 'react';
import { faEllipsis, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCardContext } from '../../lib/hooks/useCardContext';

const AddCard = () => {
  const { CardState, openCardForm, closeCardForm } = useContext(useCardContext);
  const { isCardFormOpen } = CardState;

  return (
    <Fragment>
      {!isCardFormOpen && (
        <button
          type='button'
          className='flex flex-row justify-start items-center w-[17rem] rounded-sm py-2.5 px-4 gap-2 text-white bg-red-200'
          onClick={openCardForm}
        >
          <FontAwesomeIcon icon={faPlus} />
          <h2>Add another list</h2>
        </button>
      )}

      {/* Form*/}
      {isCardFormOpen && (
        <form className='flex flex-col w-[17rem] bg-gray-300 p-1.5 gap-2 text-gray-500'>
          <input
            type='text'
            placeholder='Enter list title...'
            className='w-full'
          />
          <div className='flex justify-between items-center'>
            <section className='flex flex-row justify-start items-center gap-2'>
              <button
                type='submit'
                className='bg-blue-600 py-1.5 px-2 rounded-sm text-sm text-white hover:bg-blue-700'
              >
                Add card
              </button>
              <button
                type='button'
                className='hover:text-gray-400'
                onClick={closeCardForm}
              >
                <FontAwesomeIcon icon={faXmark} size='2x' />
              </button>
            </section>
            <button type='button'>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default AddCard;
