import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BasicOptions, AdvanceOptions } from '../../UI/Buttons/CardOptionsBtn';

const BASIC_OPTIONS = ['Add card...', 'Copy list...', 'Move list...', 'Watch'];

const ADVANCE_OPTIONS = ['Sort by...', 'Archive this list'];

const CardOptions = () => {
  return (
    <div className='absolute w-72 rounded-sm bg-white text-gray-600 translate-x-[16rem] translate-y-8'>
      <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button type='button' className='absolute top-2 right-0'>
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='py-1'>
        {BASIC_OPTIONS.map((item) => {
          return <BasicOptions key={item} operation={item} />;
        })}
        {ADVANCE_OPTIONS.map((item) => {
          return <AdvanceOptions key={item} operation={item} />;
        })}
      </section>
    </div>
  );
};
export default CardOptions;
