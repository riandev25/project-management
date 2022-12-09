import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const DATA = [
  {
    id: 'assign',
    icon: faUser,
    name: 'Assign',
  },
  {
    id: 'due-date',
    icon: faClock,
    name: 'Assign',
  },
  // {
  //   icon: faUser,
  //   name: 'Due date',
  // },
  // {
  //   icon: faUser,
  //   name: 'Assign',
  // },
];

const ChecklistBtns = () => {
  return (
    <ul className='flex flex-row justify-center items-center'>
      {DATA.map(({ id, icon, name }) => {
        return (
          <li key={id}>
            <DefaultBtn id={id} icon={icon} name={name} />
          </li>
        );
      })}
      {/* <DefaultBtn
        id='assign'
        icon={faUser}
        name='Assign'
        bgColorHover='hover:bg-gray-300'
        isDisabled={false}
      />
      <DefaultBtn
        id='due-date'
        icon={faClock}
        name='Due date'
        bgColorHover='hover:bg-gray-300'
        isDisabled={false}
      /> */}
    </ul>
  );
};
export default ChecklistBtns;
