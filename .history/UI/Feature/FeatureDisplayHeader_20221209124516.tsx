import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFeatureHeader {
  icon: IconProp;
  title: string;
}

export const FeatureDisplayHeader = ({ icon, title }: IFeatureHeader) => {
  return (
    <header className='flex flex-row gap-4'>
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
