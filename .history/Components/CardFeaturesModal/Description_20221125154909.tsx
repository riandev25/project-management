import DefaultBtn from '../../UI/Buttons/DefaultBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <section>
      <header>
        <FontAwesomeIcon icon={faBarsStaggered} size='lg' className='' />
        <h2>Description</h2>
        <button type='button' className='bg-gray-200 px-2 py-1.5 text-gray-500'>
          Edit
        </button>
      </header>
    </section>
  );
};

export default Description;
