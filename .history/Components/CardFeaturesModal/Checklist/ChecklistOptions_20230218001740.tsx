import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'zustand/shallow';
import { filterCheckitem } from '../../../lib/utils/filterCheckitem';
import { checkitemStore } from '../../../store/checklistStore';
import ChecklistDueDate from './ChecklistDueDate';
import ChecklistItemActions from './ChecklistItemActions';

interface IChecklistOption {
  id?: string;
}

const ChecklistOptions = ({ id }: IChecklistOption) => {
  const { checkitemState, toggleOptionState } = checkitemStore(
    (state) => ({
      checkitemState: state.checkitemState,
      toggleOptionState: state.toggleOptionState,
    }),
    shallow
  );

  // const isOptionOpen = filterCheckitem(
  //   checkitemState,
  //   String(id),
  //   'option-btn'
  // );

  // const isDateOptionOpen = filterCheckitem(
  //   checkitemState,
  //   String(id),
  //   'date-time-btn'
  // );

  const { isOptionOpen, isDateOptionOpen } = filterCheckitem(
    checkitemState,
    String(id)
  );

  const toggleOptionsHandler = () => {
    const _id = String(id);
    toggleOptionState(_id, 'option-btn');
  };

  const toggleDateHandler = () => {
    const _id = String(id);
    toggleOptionState(_id, 'date-time-btn');
  };

  const BUTTONS = [
    {
      id: 'data-time-btn',
      icon: faClock,
      action: toggleDateHandler,
    },
    // {
    //   id: 'user-btn',
    //   icon: faUserPlus,
    // },
    {
      id: 'option-btn',
      icon: faEllipsis,
      action: toggleOptionsHandler,
    },
  ];

  return (
    <div
      className={`${
        isOptionOpen || isDateOptionOpen ? 'flex' : 'hidden'
      } group-hover:flex absolute top-1.5 right-0`}
    >
      <div className='relative flex flex-row gap-1 pl-16 justify-end'>
        {BUTTONS.map(({ id, icon, action }, i) => {
          return (
            <button
              key={i}
              type='button'
              data-id={id}
              className={`px-1.5 rounded-sm ${
                id !== 'option-btn' || 'date-time-btn' ? 'bg-gray-300' : null
              } text-gray-500 hover:bg-gray-300 hover:text-gray-600`}
              onClick={action}
            >
              <FontAwesomeIcon icon={icon} size='xs' />
            </button>
          );
        })}
        {/* <div className='absolute z-20 right-0'> */}
        {isOptionOpen ? (
          <ChecklistItemActions id={id} exitBtnHandler={toggleOptionsHandler} />
        ) : isDateOptionOpen ? (
          <ChecklistDueDate id={id} exitBtnHandler={toggleDateHandler} />
        ) : null}
        {/* </div> */}
      </div>
    </div>
  );
};
export default ChecklistOptions;
