import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const DarkBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='flex justify-center items-center gap-2 bg-gray-400 rounded-md text-sm text-white font-medium space-x-1 p-2'
    >
      <FontAwesomeIcon icon={icon} />
      {label && <span>{label}</span>}
    </button>
  );
};

export default DarkBtn;
