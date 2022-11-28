import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 backdrop-blur-sm'
    >
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default TransparentBtn;
