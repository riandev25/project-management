import DefaultBtn from '../../UI/Buttons/DefaultBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <section className='flex flex-row gap-4 text-gray-600'>
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size='lg'
        className='translate-y-1'
      />
      <div className='flex flex-col gap-4'>
        <section className='space-x-2'>
          <span className='font-bold'>Description</span>
          <button
            type='button'
            className='bg-gray-200 py-0.5 px-3 text-gray-500'
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
