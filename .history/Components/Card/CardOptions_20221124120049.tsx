import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardOptionsButton from '../../UI/Buttons/CardOptionsBtn';

const OPTIONS = [
  'Add card...',
  'Copy list...',
  'Move list...',
  'Watch',
  'Sort by...',
  'Archive this list',
];

const ADVANCE_OPTIONS = ['Sort by...', 'Archive this list'];

const CardOptions = () => {
  return (
    <div className='absolute w-72 rounded-sm bg-white text-gray-600 translate-x-[14.5rem] translate-y-8'>
      <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button type='button' className='absolute top-2 right-0'>
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='py-1'>
        <button
          type='button'
          className='flex w-full p-1.5 text-start hover:bg-gray-400'
        >
          <h2>Add</h2>
        </button>
        {OPTIONS.map((item) => {
          return <CardOptionsButton key={item} operation={item} />;
        })}
      </section>
    </div>
  );
};
export default CardOptions;
