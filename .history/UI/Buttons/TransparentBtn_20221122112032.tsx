import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button type='button' className='flex flex-row gap-2 bg-red-400'>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default TransparentBtn;
