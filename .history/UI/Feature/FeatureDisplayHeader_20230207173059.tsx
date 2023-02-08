import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoIconBtn } from '../Buttons/Buttons';

interface IFeatureHeader {
  id: string;
  icon: IconProp;
  title: string;
  btnTitle: string;
  rightBtn: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FeatureDisplayHeader = ({
  id,
  icon,
  title,
  btnTitle,
  rightBtn,
  onClick,
}: IFeatureHeader) => {
  return (
    <header className='flex flex-row gap-4'>
      <FontAwesomeIcon icon={icon} size='lg' className='translate-y-1' />
      <div className='flex flex-row justify-between flex-1 gap-4'>
        <span className='font-bold'>{title}</span>
        {/* <button
          type='button'
          className='bg-gray-200 py-1 px-3 rounded-sm text-sm text-gray-500 hover:bg-gray-300'
        >
          {btnTitle}
        </button> */}
        {/* <button
          data-id={id}
          type='button'
          className='bg-gray-200 flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-sm text-gray-700 hover:bg-gray-300'
          onClick={onClick}
        >
          {btnTitle}
        </button> */}
        {rightBtn ? (
          <NoIconBtn id={id} title={btnTitle} onClick={onClick} />
        ) : null}
      </div>
    </header>
  );
};
