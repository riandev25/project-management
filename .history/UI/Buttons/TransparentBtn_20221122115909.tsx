import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='text-white bg-blue-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
    >
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default TransparentBtn;
