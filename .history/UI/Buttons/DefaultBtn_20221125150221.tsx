import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DefaultBtnProp {
  bgColor: string;
  pos: string;
  icon: IconProp;
  iconColor: string;
  name?: string;
}

const DefaultBtn = ({
  bgColor,
  pos,
  icon,
  iconColor,
  name,
}: DefaultBtnProp) => {
  return (
    <button
      type='button'
      className={`${bgColor} py-1 px-1.5 space-x-2 text-${pos}`}
    >
      <span>
        <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
      </span>
      {name && <span>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
