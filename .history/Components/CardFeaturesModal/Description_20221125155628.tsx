import DefaultBtn from '../../UI/Buttons/DefaultBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <section>
      <FontAwesomeIcon icon={faBarsStaggered} size='lg' className='' />
      <div>
        <section>
          <h2>Description</h2>
          <button
            type='button'
            className='bg-gray-200 px-2 py-1.5 text-gray-500'
          >
            Edit
          </button>
        </section>
        <section>
          <h3>Paragraph description</h3>
        </section>
      </div>
    </section>
  );
};

export default Description;
