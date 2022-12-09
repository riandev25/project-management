import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { NoIconBtn } from '../../../UI/Buttons/NoIconBtn';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';

import AddItemCheckList from './AddItemCheckList';

const Checklist = ({ title, percentage, checkListData }: IChecklistArray) => {
  const onChangeHandler = () => {};

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        icon={faListCheck}
        title={title}
        btnTitle='Delete'
      />
      <div className='flex flex-col gap-1'>
        <section className='flex flex-row justify-center items-center gap-4'>
          <h3 className='text-xs px-1'>{`${percentage}%`}</h3>
          <div className='w-full h-2 rounded-full bg-gray-300' />
        </section>
        <ul className='flex flex-col'>
          {checkListData.map((item, i) => {
            return (
              <li key={i} className='flex flex-row py-2 justify-center gap-4'>
                <input
                  type='checkbox'
                  className='w-5 mx-1'
                  checked={item.isChecked}
                  onChange={onChangeHandler}
                />
                <h2 className='w-full text-sm'>{item.description}</h2>
              </li>
            );
          })}
        </ul>
        <section className='py-1.5 pl-10'>
          {/* <NoIconBtn id='add-checklist-item' name='Add an item' /> */}
          <AddItemCheckList />
        </section>
      </div>
    </div>
  );
};
export default Checklist;
