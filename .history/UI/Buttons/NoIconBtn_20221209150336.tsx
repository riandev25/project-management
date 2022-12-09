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
}: NoIconBtnProp) => {
  return (
    <button
      data-id={id}
      type='button'
      // className={`${bgColor} hover:bg-gray-500
      // flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 ${'cursor-pointer'}`}
      className='hover:bg-gray-500'
      onClick={onClick}
    >
      {name && <span className='text-sm text-gray-700'>{name}</span>}
    </button>
  );
};
export default NoIconBtn;
