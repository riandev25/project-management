import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FeatureDisplayHeader = ({ icon, title }) => {
  return (
    <header>
      <FontAwesomeIcon icon={icon} size='lg' className='translate-y-1' />
      <div className='flex flex-col justify-between gap-4'>
        <span className='font-bold'>Description</span>
        <button
          type='button'
          className='bg-gray-200 py-0.5 px-3 text-sm text-gray-500 hover:bg-gray-300'
        >
          {title}
        </button>
      </div>
    </header>
  );
};
