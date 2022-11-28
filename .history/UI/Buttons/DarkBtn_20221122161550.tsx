import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const DarkBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='text-white font-medium rounded-lg text-sm py-2 px-4 bg-gray-800'
    >
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default DarkBtn;
