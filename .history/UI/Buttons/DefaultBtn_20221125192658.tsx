import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DefaultBtnProp {
  bgColor: string;
  icon: IconProp;
  iconColor: string;
  name?: string;
  fullWidth?: boolean;
}

const DefaultBtn = ({
  bgColor,
  icon,
  iconColor,
  name,
  fullWidth,
}: DefaultBtnProp) => {
  return (
    <button
      type='button'
      className={`${bgColor} ${
        fullWidth && 'w-full'
      } flex flex-row justify-center items-center rounded-sm py-1 px-3 gap-2`}
    >
      <span>
        <FontAwesomeIcon icon={icon} size='xs' className={`${iconColor}`} />
      </span>
      {name && <span className='text-sm'>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
