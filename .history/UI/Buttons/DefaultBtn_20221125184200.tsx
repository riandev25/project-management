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
}

const DefaultBtn = ({ bgColor, icon, iconColor, name }: DefaultBtnProp) => {
  return (
    <button type='button' className={`${bgColor} py-1 px-2 space-x-2 `}>
      <span>
        <FontAwesomeIcon icon={icon} size='sm' className={`${iconColor}`} />
      </span>
      {name && <span className='text-sm'>{name}</span>}
    </button>
  );
};
export default DefaultBtn;
