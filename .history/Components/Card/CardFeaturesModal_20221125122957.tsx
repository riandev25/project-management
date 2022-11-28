import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-[10rem] py-8 px-4 bg-white'>
      <header className='flex flex-row'>
        <FontAwesomeIcon icon={faComputer} />
        <div>
          <h1>
            Clicking the collection beneath a board should filter by collection,
            not open collections pop-over
          </h1>
          <h3>in list Sprint Backlog</h3>
        </div>
      </header>
    </div>
  );
};
export default CardFeaturesModal;
