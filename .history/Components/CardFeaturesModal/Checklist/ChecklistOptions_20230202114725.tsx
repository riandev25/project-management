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

const ChecklistOptions = ({
  idCheck,
}: IChecklistOption) => {

  const { checkitemState, toggleOptionState } = checkitemStore(
    (state) => ({
      checkitemState: state.checkitemState,
      toggleOptionState: state.toggleOptionState,
    }),
    shallow
  );

  const isOptionOpen = filterCheckitem(checkitemState, String(idCheck), 'option-btn')

  const toggleOptionsHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = String(event.currentTarget.dataset.id)
    toggleOptionState(String(idCheck), name)
  }

  return (
    <div className='relative hidden group-hover:flex absolute top-1.5 right-0'>
      <ul className='flex flex-row gap-1'>
        {BUTTONS.map(({ id, icon }) => {
          return (
            <li key={id}>
              <button
                type='button'
                data-id={id}
                data-idCheck={idCheck}
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
      </ul>
      // {isOptionOpen ? (
      //   <ChecklistItemActions
      //     id={idCheck}
      //     exitBtnHandler={toggleOptionsHandler}
      //     // deleteChecklistItemHandler={deleteChecklistItemHandler}
      //     />
      //   ) : null}
    </div>
  );
};
export default ChecklistOptions;
