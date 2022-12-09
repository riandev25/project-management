import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const AddItemCheckList = () => {
  const [addCheckList, setAddCheckList] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className='flex flex-col w-full gap-2 text-sm text-gray-500'
      onSubmit={onSubmit}
    >
      <textarea
        value={addCheckList}
        onChange={(event) => setAddCheckList(event.target.value)}
        role='textbox'
        className='h-24 py-2.5 px-2 border-[3px] focus:border-blue-400 bg-white'
      />
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-4'>
          <button
            type='submit'
            className='bg-blue-600 py-1.5 px-3 rounded-sm text-sm text-white hover:bg-blue-700'
          >
            Add
          </button>
          <button
            type='button'
            className='hover:bg-gray-300'
            // onClick={closeCardChildForm}
          >
            Cancel
          </button>
        </section>
        <section className='flex flex-row justify-center items-center'>
          <DefaultBtn
            id='assign'
            icon={faUser}
            name='Assign'
            bgColorHover='hover:bg-gray-300'
            isDisabled={false}
          />
        </section>
      </div>
    </form>
  );
};
export default AddItemCheckList;
