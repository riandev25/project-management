import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinner = () => {
  return <FontAwesomeIcon icon={faSpinner} className='fa-spin' />;
};
export default LoadingSpinner;
