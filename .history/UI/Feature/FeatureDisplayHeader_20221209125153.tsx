import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFeatureHeader {
  icon: IconProp;
  title: string;
  btnTitle: string;
}

export const FeatureDisplayHeader = ({
  icon,
  title,
  btnTitle,
}: IFeatureHeader) => {
  return (
    <header className='flex flex-row gap-4'>
      <FontAwesomeIcon icon={icon} size='lg' className='translate-y-1' />
      <div className='flex flex-row justify-between flex-1 gap-4'>
        <span className='font-bold'>{title}</span>
        <button
          type='button'
          className='bg-gray-200 py-1 px-3 rounded-sm text-sm text-gray-500 hover:bg-gray-300'
        >
          {btnTitle}
        </button>
      </div>
    </header>
  );
};
