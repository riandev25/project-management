import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button className='flex flex-row gap-2 bg-gray-800'>
      <FontAwesomeIcon icon={icon} className='bg-gray-300' />
      <span>{label}</span>
    </button>
  );
};

export default TransparentBtn;
