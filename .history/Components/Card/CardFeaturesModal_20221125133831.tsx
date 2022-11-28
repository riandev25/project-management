import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-3xl py-8 px-4 bg-white text-gray-600'>
      <header className='flex flex-row justify-center items-start'>
        <FontAwesomeIcon
          icon={faComputer}
          size='lg'
          className='translate-y-[5px]'
        />
        <div>
          <h1 className='text-xl'>
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
