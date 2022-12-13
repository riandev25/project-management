import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';

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
    id: 'checklist-item-option-',
    icon: faEllipsis,
  },
];

const ChecklistOptions = () => {
  const { dispatchFeature } = useContext(FeatureContext);

  const openOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: event.currentTarget.dataset.id },
    });
    console.log(event.currentTarget.dataset.id);
  };

  return (
    <div className='hidden group-hover:flex absolute top-1.5 right-0'>
      <ul className='flex flex-row gap-1'>
        {BUTTONS.map((button, i) => {
          return (
            <li key={button.id}>
              <button
                type='button'
                data-id={`${button.id}${i}`}
                className={`px-1.5 rounded-sm ${
                  button.id !== 'option-btn' ? 'bg-gray-300' : null
                } text-gray-500 hover:bg-gray-400 hover:text-gray-600`}
                onClick={openOptionHandler}
              >
                <FontAwesomeIcon icon={button.icon} size='xs' />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChecklistOptions;
