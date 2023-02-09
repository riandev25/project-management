import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBoardCardData } from '../../../interfaces/board.interface';

const FeaturesHeader = ({ cardName, listName }: IBoardCardData) => {
  return (
    <header className='flex flex-row justify-start items-start gap-4'>
      <FontAwesomeIcon
        icon={faComputer}
        size='lg'
        className='translate-y-[5px]'
      />
      <div className='flex flex-col gap-4'>
        <section className='flex flex-col space-y-1'>
          <h1 className='pr-16 text-xl text-gray-700 font-semibold'>
            {cardName}
          </h1>
          <h3 className='text-sm'>
            in list{' '}
            <p className='underline underline-offset-2'>
              {`Sprint ${listName}`}
            </p>
          </h3>
        </section>
      </div>
    </header>
  );
};
export default FeaturesHeader;
