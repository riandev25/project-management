import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';

interface DefaultBtnProp {
  // id?: string;
  bgColor?: string;
  icon: IconProp;
  iconColor?: string;
  name?: string;
  fullWidth?: boolean;
  onClick?: MouseEventHandler;
}

const DefaultBtn = ({
  // id,
  bgColor,
  icon,
  iconColor,
  name,
  fullWidth,
  onClick,
}: DefaultBtnProp) => {
  return (
    <button
      // data-id={id}
      type='button'
      className={`${bgColor} ${
        fullWidth && 'w-full'
      } flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2`}
      onClick={onClick}
    >
      <span>
        <FontAwesomeIcon icon={icon} size='xs' className={`${iconColor}`} />
      </span>
      {name && <span className='text-sm'>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
