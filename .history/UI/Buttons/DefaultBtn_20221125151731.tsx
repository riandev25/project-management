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
      className={`${bgColor} flex flex-row py-1 px-2 gap-2 text-${pos}`}
    >
      <span>
        <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
      </span>
      {name && <h3 className=''>{name}</h3>}
    </button>
  );
};
export default DefaultBtn;
