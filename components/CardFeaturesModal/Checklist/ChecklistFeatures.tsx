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
    name: 'Due date',
  },
];

const ChecklistFeatures = () => {
  return (
    <ul className='flex flex-row justify-center items-center gap-4'>
      {DATA.map(({ id, icon, name }) => {
        return (
          <li key={id}>
            <DefaultBtn
              id={id}
              icon={icon}
              name={name}
              bgColorHover='hover:bg-gray-300'
              isDisabled={false}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ChecklistFeatures;
