import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescriptionBtn = ({ leftIcon }) => {
  return (
    <button>
      <FontAwesomeIcon icon={leftIcon} />
    </button>
  );
};
export default DescriptionBtn;
