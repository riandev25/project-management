import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { shallow } from 'zustand/shallow';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { filterCheckitem } from '../../../lib/utils/filterCheckitem';
import { checkitemStore } from '../../../store/checklistStore';
import ChecklistItemActions from './ChecklistItemActions';

interface IChecklistOption {
  idCheck?: string;
  openOptionsHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

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

const ChecklistOptions = ({ idCheck }: IChecklistOption) => {
  const { checkitemState, toggleOptionState } = checkitemStore(
    (state) => ({
      checkitemState: state.checkitemState,
      toggleOptionState: state.toggleOptionState,
    }),
    shallow
  );

  const isOptionOpen = filterCheckitem(
    checkitemState,
    String(idCheck),
    'option-btn'
  );

  const toggleOptionsHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = String(event.currentTarget.dataset.id);
    const _id = String(idCheck);
    toggleOptionState(_id, name);
  };

  return (
    <div className='hidden group-hover:flex absolute top-1.5 right-0'>
      <ul className='relative flex flex-row gap-1'>
        {BUTTONS.map(({ id, icon }) => {
          return (
            <li key={id}>
              <button
                type='button'
                data-id={id}
                className={`px-1.5 rounded-sm ${
                  id !== 'option-btn' ? 'bg-gray-300' : null
                } text-gray-500 hover:bg-gray-400 hover:text-gray-600`}
                onClick={toggleOptionsHandler}
              >
                <FontAwesomeIcon icon={icon} size='xs' />
              </button>
            </li>
          );
        })}
        <li className='absolute z-20 top-2 right-0'>
          {isOptionOpen ? (
            <ChecklistItemActions
              id={idCheck}
              exitBtnHandler={toggleOptionsHandler}
              // deleteChecklistItemHandler={deleteChecklistItemHandler}
            />
          ) : null}
        </li>
      </ul>
    </div>
  );
};
export default ChecklistOptions;
