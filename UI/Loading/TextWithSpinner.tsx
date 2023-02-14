import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ITextWithSpinner {
  text: string;
}

const TextWithSpinner = ({ text }: ITextWithSpinner) => {
  return (
    <div className='flex gap-2'>
      <span>{text}</span>
      <FontAwesomeIcon icon={faSpinner} className='fa-spin' size='lg' />
    </div>
  );
};

export default TextWithSpinner;
