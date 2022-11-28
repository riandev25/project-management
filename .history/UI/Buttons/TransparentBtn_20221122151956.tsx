import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='text-white font-medium rounded-lg text-sm px-4'
    >
      {/* <div className='backdrop-blur'> */}
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
      {/* </div> */}
    </button>
  );
};

export default TransparentBtn;
