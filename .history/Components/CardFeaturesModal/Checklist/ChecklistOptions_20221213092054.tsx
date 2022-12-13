import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BUTTONS = [
  {
    id: 'time-btn',
    icon: faClock,
  },
  {
    id: 'user-btn',
    icon: faUser,
  },
  {
    id: 'option-btn',
    icon: faEllipsis,
  },
];

const ChecklistOptions = () => {
  return (
    <ul className='flex flex-row gap-1'>
      {BUTTONS.map(({ id, icon }) => {
        return (
          <li key={id}>
            <button
              type='button'
              id={id}
              className='p-2 bg-gray-200 hover:bg-gray-300'
            >
              <FontAwesomeIcon icon={icon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ChecklistOptions;
