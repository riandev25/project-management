import { Fragment } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddCard = () => {
  return (
    <Fragment>
      <button
        type='button'
        className='flex flex-row justify-start items-center w-[17rem] rounded-sm py-2.5 px-4 gap-2 text-white bg-red-200'
      >
        <FontAwesomeIcon icon={faPlus} />
        <h2>Add another list</h2>
      </button>
      <div className='flex flex-col w-[17rem]'>
        <input type='text'></input>
      </div>
    </Fragment>
  );
};
export default AddCard;
