import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Description from './Description';
import Labels from './Labels';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-3xl py-6 px-5 gap-6 bg-white text-gray-600'>
      <header className='flex flex-row justify-center items-start gap-4'>
        <FontAwesomeIcon
          icon={faComputer}
          size='lg'
          className='translate-y-[5px]'
        />
        <div className='flex flex-col gap-4'>
          <section className='space-y-1'>
            <h1 className='text-xl text-gray-700 font-semibold'>
              Clicking the collection beneath a board should filter by
              collection, not open collections pop-over
            </h1>
            <h3 className='text-sm'>
              in list{' '}
              <button className='underline underline-offset-1 hover:text-gray-700'>
                Sprint Backlog
              </button>
            </h3>
          </section>
        </div>
      </header>
      <div>
        <section className='flex flex-col gap-5'>
          <Labels />
          <Description />
        </section>
      </div>
    </div>
  );
};
export default CardFeaturesModal;
