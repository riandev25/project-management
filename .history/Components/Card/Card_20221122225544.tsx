import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import CardChild from './CardChild';

const Card = () => {
  return (
    <div className='flex flex-col w-[17rem] gap-1 bg-gray-200 px-2'>
      <header className='flex flex-row justify-between items-center py-2 px-1'>
        <h2>Backlog</h2>
        <FontAwesomeIcon icon={faEllipsis} />
      </header>

      <section className='flex flex-col gap-[2px]'>
        <CardChild />
      </section>
    </div>
  );
};

export default Card;
