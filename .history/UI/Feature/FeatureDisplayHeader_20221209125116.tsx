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
      <div className='flex flex-row justify-between w-full gap-4'>
        <span className='font-bold'>{title}</span>
        <button
          type='button'
          className='bg-gray-200 py-0.5 px-3 text-sm text-gray-500 hover:bg-gray-300'
        >
          {btnTitle}
        </button>
      </div>
    </header>
  );
};
