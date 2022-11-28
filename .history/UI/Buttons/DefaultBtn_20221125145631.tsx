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
}

const DefaultBtn = ({ bgColor, pos, icon, iconColor }: DefaultBtnProp) => {
  return (
    <button
      type='button'
      className={`${bgColor} py-1 px-1.5 space-x-1 text-${pos}`}
    >
      <span>
        <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
      </span>
      <span>New Team/boards tab</span>
    </button>
  );
};
export default DefaultBtn;
