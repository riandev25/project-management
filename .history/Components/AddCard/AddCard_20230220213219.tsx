import { FormEvent, Fragment, useEffect, useState } from 'react';
import { faEllipsis, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateList } from '../../lib/hooks/list/useCreateList';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';

const AddCard = () => {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');

  const { mutateAsync, isLoading, isSuccess } = useCreateList();

  const toggleFormHandler = () => {
    setFormOpen(!formOpen);
    if (isSuccess) setFormOpen(!formOpen);
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await mutateAsync({ listName: capitalizeFirstLetter(listName) });
  };

  return (
    <Fragment>
      {!formOpen && (
        <button
          type='button'
          className='flex flex-row justify-start items-center w-[calc(100vw-32px)] xs:w-[17rem] rounded-sm py-2.5 px-4 gap-2 text-gray-800 bg-red-200 hover:bg-red-300'
          onClick={toggleFormHandler}
        >
          <FontAwesomeIcon icon={faPlus} />
          <h2>Add another list</h2>
        </button>
      )}

      {/* Form*/}
      {formOpen && (
        <form
          className='flex flex-col w-[17rem] rounded-sm bg-gray-300 p-1.5 gap-2 text-sm text-gray-500'
          onSubmit={onSubmitHandler}
        >
          <input
            type='text'
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder='Enter list title...'
            className='w-full py-2 px-3'
          />
          <div className='flex justify-between items-center'>
            <section className='flex flex-row justify-start items-center gap-2'>
              <button
                type='submit'
                className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
              >
                {isLoading ? 'Adding list...' : 'Add list'}
              </button>
              <button
                type='button'
                className='hover:text-gray-400'
                onClick={toggleFormHandler}
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
