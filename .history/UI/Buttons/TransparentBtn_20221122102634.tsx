import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransBtn } from '../../types/props/props_TransBtn';

const TransparentBtn = ({ icon }: TransBtn) => {
  return (
    <button>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default TransparentBtn;
