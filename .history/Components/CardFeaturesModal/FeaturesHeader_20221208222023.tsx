import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesHeader = () => {
  return (
    <header className='flex flex-row justify-center items-start gap-4'>
      <FontAwesomeIcon
        icon={faComputer}
        size='lg'
        className='translate-y-[5px]'
      />
      <div className='flex flex-col gap-4'>
        <section className='space-y-1'>
          <h1 className='pr-16 text-xl text-gray-700 font-semibold'>
            Clicking the collection beneath a board should filter by collection,
            not open collections pop-over
          </h1>
          <h3 className='text-sm'>
            in list{' '}
            <button className='underline underline-offset-1 hover:text-gray-800'>
              Sprint Backlog
            </button>
          </h3>
        </section>
      </div>
    </header>
  );
};
export default FeaturesHeader;
