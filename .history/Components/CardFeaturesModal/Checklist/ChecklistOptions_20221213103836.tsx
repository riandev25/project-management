import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChecklistItemActions from './ChecklistItemActions';

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
    <div className='hidden group-hover:flex absolute top-1.5 right-0'>
      <div className='relative'>
        <ul className='flex flex-row gap-1'>
          {BUTTONS.map(({ id, icon }) => {
            return (
              <li key={id}>
                <button
                  type='button'
                  id={id}
                  className={`px-1.5 rounded-sm ${
                    id !== 'option-btn' ? 'bg-gray-300' : null
                  } text-gray-500 hover:bg-gray-400 hover:text-gray-600`}
                >
                  <FontAwesomeIcon icon={icon} size='xs' />
                </button>
              </li>
            );
          })}
        </ul>
        <ChecklistItemActions />
      </div>
    </div>
  );
};
export default ChecklistOptions;
