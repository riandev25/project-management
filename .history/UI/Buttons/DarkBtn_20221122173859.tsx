import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const DarkBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='bg-gray-500 text-white font-medium rounded-lg text-sm px-4 py-2'
    >
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default DarkBtn;
