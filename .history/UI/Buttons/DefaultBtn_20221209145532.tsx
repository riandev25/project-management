import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

interface DefaultBtnProp {
  id?: string;
  bgColor?: string;
  bgColorHover?: string;
  icon: IconProp;
  iconColor?: string;
  name?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
}

const DefaultBtn = ({
  id,
  bgColor,
  bgColorHover,
  icon,
  iconColor,
  name,
  fullWidth,
  onClick,
  isDisabled,
}: DefaultBtnProp) => {
  return (
    <button
      disabled={isDisabled}
      data-id={id}
      type='button'
      className={`${bgColor} ${!isDisabled && bgColorHover} ${
        fullWidth && 'w-full'
      } flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 ${
        !isDisabled && 'cursor-pointer'
      }`}
      onClick={onClick}
    >
      <span>
        <FontAwesomeIcon icon={icon} size='xs' className={`${iconColor}`} />
      </span>
      {name && <span className='text-sm text-gray-700'>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
