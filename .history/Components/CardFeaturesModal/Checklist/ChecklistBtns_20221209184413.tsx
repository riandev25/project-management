import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const ChecklistBtns = () => {
  return (
    <section className='flex flex-row justify-center items-center'>
      <DefaultBtn
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
      />
    </section>
  );
};
export default ChecklistBtns;
