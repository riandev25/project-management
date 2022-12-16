import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDualIconBtn {
  icon1: IconProp;
  icon2: IconProp;
  toggleBtn: boolean;
  onClick(): void;
}

export const DualIconBtn = ({
  icon1,
  icon2,
  toggleBtn,
  onClick,
}: IDualIconBtn) => {
  const bgColor = toggleBtn
    ? 'bg-gray-800 text-white'
    : 'text-gray-800 hover:bg-gray-200';

  return (
    <button
      type='button'
      className={`px-1.5 space-x-1 rounded-sm ${bgColor} `}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon1} size='sm' />
      <FontAwesomeIcon icon={icon2} size='2xs' />
    </button>
  );
};

interface ISingleIconBtn {
  icon: IconProp;
  key?: number;
}

export const SingleIconBtn = ({ icon, key }: ISingleIconBtn) => {
  return (
    <button
      key={key}
      type='button'
      className='px-1.5 space-x-1 rounded-sm text-gray-800 hover:bg-gray-200'
    >
      <FontAwesomeIcon icon={icon} size='sm' />
    </button>
  );
};
