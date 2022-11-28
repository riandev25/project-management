import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-3xl py-6 px-5 bg-white text-gray-600'>
      <header className='flex flex-row justify-center items-start gap-4'>
        <FontAwesomeIcon
          icon={faComputer}
          size='lg'
          className='translate-y-[5px]'
        />
        <div>
          <h1 className='text-xl text-gray-700 font-semibold'>
            Clicking the collection beneath a board should filter by collection,
            not open collections pop-over
          </h1>
          <h3>
            in list{' '}
            <button className='underline underline-offset-1'>
              Sprint Backlog
            </button>
          </h3>
        </div>
      </header>
    </div>
  );
};
export default CardFeaturesModal;
