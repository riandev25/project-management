import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

interface NoIconBtnProp {
  id?: string;
  bgColor?: string;
  bgColorHover?: string;
  name?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
}

const NoIconBtn = ({
  id,
  bgColor,
  bgColorHover,
  name,
  fullWidth,
  onClick,
  isDisabled,
}: NoIconBtnProp) => {
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
      {name && <span className='text-sm text-gray-700'>{name}</span>}
    </button>
  );
};
export default NoIconBtn;
