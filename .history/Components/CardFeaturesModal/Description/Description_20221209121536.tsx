import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
  return (
    <div className='flex flex-row gap-4 text-gray-600'>
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size='lg'
        className='translate-y-1'
      />
      <div className='flex flex-col gap-4'>
        <section className='space-x-4'>
          <span className='font-bold'>Description</span>
          <button
            type='button'
            className='bg-gray-200 py-0.5 px-3 text-sm text-gray-500 hover:bg-gray-300'
          >
            Edit
          </button>
        </section>
        <section>
          <div className='text-sm'>Paragraph description</div>
        </section>
      </div>
    </div>
  );
};

export default Description;
