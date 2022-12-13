import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BUTTONS = [
  {
    id: 'time-btn',
    icon: faClock,
  },
  {
    id: 'user-btn',
    icon: faUserPlus,
  },
  {
    id: 'option-btn',
    icon: faEllipsis,
  },
];

const ChecklistOptions = () => {
  return (
    <ul className='absolute top-0 right-0 flex flex-row gap-1'>
      {BUTTONS.map(({ id, icon }) => {
        return (
          <li key={id}>
            <button
              type='button'
              id={id}
              className='px-1 bg-gray-200 hover:bg-gray-300'
            >
              <FontAwesomeIcon icon={icon} size='xs' />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ChecklistOptions;
