import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Labels = () => {
  return (
    <div>
      <h3>Labels</h3>
      <button type='button' className='bg-blue-300 p-2 space-x-1'>
        <span>
          <FontAwesomeIcon icon={faCircle} className='text-blue-400' />
        </span>
        <span>New Team/boards tab</span>
      </button>
    </div>
  );
};
export default Labels;
