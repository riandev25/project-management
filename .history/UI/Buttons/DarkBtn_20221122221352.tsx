import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const DarkBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='bg-gray-500  flex justify-center items-center gap-2 rounded-md text-sm text-white font-medium space-x-1 p-2'
    >
      <FontAwesomeIcon icon={icon} />
      {label && <span>{label}</span>}
    </button>
  );
};

export default DarkBtn;
