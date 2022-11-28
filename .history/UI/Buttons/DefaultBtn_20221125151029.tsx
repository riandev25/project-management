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
  nameColor?: string;
}

const DefaultBtn = ({
  bgColor,
  pos,
  icon,
  iconColor,
  name,
  nameColor,
}: DefaultBtnProp) => {
  return (
    <button
      type='button'
      className={`${bgColor} py-1 px-2 space-x-2 text-${pos}`}
    >
      <span>
        <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
      </span>
      {name && <span className={nameColor}>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
