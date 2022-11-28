import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-[58rem] py-8 px-4 bg-white'>
      <header className='flex flex-row justify-center items-start'>
        <FontAwesomeIcon icon={faComputer} />
        <div>
          <span>
            Clicking the collection beneath a board should filter by collection,
            not open collections pop-over
          </span>
          <span>in list Sprint Backlog</span>
        </div>
      </header>
    </div>
  );
};
export default CardFeaturesModal;
