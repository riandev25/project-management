import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureDisplayHeader = ({ icon }) => {
  return (
    <header>
      <FontAwesomeIcon icon={icon} size='lg' className='translate-y-1' />
      <div className='flex flex-col gap-4'>
        <span className='font-bold'>Description</span>
        <button
          type='button'
          className='bg-gray-200 py-0.5 px-3 text-sm text-gray-500 hover:bg-gray-300'
        >
          Edit
        </button>
      </div>
    </header>
  );
};
export default FeatureDisplayHeader;
