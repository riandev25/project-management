import DefaultBtn from '../../UI/Buttons/DefaultBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <section className='flex flex-row gap-4'>
      <FontAwesomeIcon icon={faBarsStaggered} size='lg' className='' />
      <div className='flex flex-col gap-5'>
        <section className='space-x-2'>
          <span>Description</span>
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
