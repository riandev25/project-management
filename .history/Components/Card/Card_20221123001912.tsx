import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import CardChild from './CardChild';

const Card = () => {
  return (
    <div className='flex flex-col w-[17rem] bg-gray-300 px-1.5 rounded-sm text-sm'>
      <header className='flex flex-row justify-between items-center py-2 px-1'>
        <h2 className='font-semibold text-gray-700'>Backlog</h2>
        <FontAwesomeIcon icon={faEllipsis} />
      </header>

      <section className='flex flex-col w-full gap-[2px]'>
        <CardChild />
      </section>
    </div>
  );
};

export default Card;
