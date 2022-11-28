import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddCard = () => {
  return (
    <button type='button' className='w-[17rem] py-2.5 px-4 text-white'>
      <FontAwesomeIcon icon={faPlus} />
      <h2>Add another list</h2>
    </button>
  );
};
export default AddCard;
