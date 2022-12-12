import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { NoIconBtn } from '../../../UI/Buttons/NoIconBtn';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import { IChecklistArray } from '../../../interfaces/checklist';
import AddItemCheckList from './AddItemCheckList';
import { ChangeEvent, useContext, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';

const Checklist = ({ title, percentage, checklistItems }: IChecklistArray) => {
  const [checklistForm, setAddCheckListForm] = useState<boolean>(false);

  const { dispatchChecklist } = useContext(ChecklistContext);

  const checklistFormHandler = () => {
    setAddCheckListForm(!checklistForm);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchChecklist({
      type: 'TOGGLE_CHECKBOX',
      payload: {
        title,
        id: event.currentTarget.dataset.id,
      },
    });
  };

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        icon={faListCheck}
        title={title}
        btnTitle='Delete'
      />
      <div className='flex flex-col gap-1 text-gray-600'>
        <section className='flex flex-row justify-center items-center gap-4'>
          <h3 className='text-xs px-1'>{`${percentage}%`}</h3>
          <div className='w-full h-2 rounded-full bg-gray-300' />
        </section>
        <ul className='flex flex-col'>
          {checklistItems.map((item, i) => {
            return (
              <li key={i} className='flex flex-row py-2 justify-center gap-4'>
                <input
                  data-id={item.description}
                  type='checkbox'
                  name={item.description}
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
          {!checklistForm ? (
            <NoIconBtn
              id='add-checklist-item'
              name='Add an item'
              onClick={checklistFormHandler}
            />
          ) : (
            <AddItemCheckList
              title={title}
              checklistFormHandler={checklistFormHandler}
            />
          )}
        </section>
      </div>
    </div>
  );
};
export default Checklist;
