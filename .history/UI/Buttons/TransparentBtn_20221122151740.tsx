import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon, label }: TransBtn) => {
  return (
    <button
      type='button'
      className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-400'
    >
      {/* <div className='backdrop-blur'> */}
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
      {/* </div> */}
    </button>
  );
};

export default TransparentBtn;
