import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddCard = () => {
  return (
    <button
      type='button'
      className='flex flex-row justify-center items-center w-[17rem] py-2.5 px-4 gap-2 text-white bg-red-200'
    >
      <FontAwesomeIcon icon={faPlus} />
      <h2>Add another list</h2>
    </button>
  );
};
export default AddCard;
