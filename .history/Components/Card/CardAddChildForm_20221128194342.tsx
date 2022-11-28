import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';

interface prop {
  closeCardChildForm(): void;
}

const CardAddForm = ({ closeCardChildForm }: prop) => {
  const [addChild, setAddChild] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(event.currentTarget.elements[0]);
  };

  return (
    <form
      className='flex flex-col w-full mt-2.5 gap-2 text-gray-500'
      onSubmit={onSubmit}
    >
      <textarea
        value={addChild}
        onChange={(event) => setAddChild(event.target.value)}
        role='textbox'
        className='h-24 py-2.5 px-2 bg-white'
      ></textarea>
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-2'>
          <button
            type='submit'
            className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
          >
            Add card
          </button>
          <button
            type='button'
            className='hover:text-gray-400'
            onClick={closeCardChildForm}
          >
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
