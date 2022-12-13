import { faListCheck } from '@fortawesome/free-solid-svg-icons';
// import { NoIconBtn } from '../../../UI/Buttons/NoIconBtn';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import { IChecklistArray } from '../../../interfaces/checklist';
import AddItemCheckList from './AddItemCheckList';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import ChecklistOptions from './ChecklistOptions';
import ChecklistItemActions from './ChecklistItemActions';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';

const Checklist = ({
  id,
  title,
  percentage,
  checklistItems,
}: IChecklistArray) => {
  const [checklistForm, setAddCheckListForm] = useState<boolean>(false);

  const { dispatchChecklist } = useContext(ChecklistContext);

  const checklistFormHandler = () => {
    setAddCheckListForm(!checklistForm);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchChecklist({
      type: 'TOGGLE_CHECKBOX',
      payload: {
        idCheckArray: id,
        idCheck: Number(event.currentTarget.dataset.id),
      },
    });
  };

  const checklistPercentage = () => {
    const percentItems = checklistItems.filter((checklist) => {
      return checklist.isChecked ? checklist : undefined;
    });
    return Math.round((percentItems.length / checklistItems.length) * 100);
  };

  const percent = checklistPercentage();

  const deleteCheckArrayHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = Number(event.currentTarget.dataset.id);
    dispatchChecklist({
      type: 'DELETE_CHECKLIST',
      payload: {
        id: id,
      },
    });
  };

  const optionsHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatchChecklist({
      type: 'TOGGLE_OPTION',
      payload: {
        idCheckArray: id,
        idCheck: Number(event.currentTarget.dataset.effect),
        idBtn: String(event.currentTarget.dataset.btn),
      },
    });
  };

  const deleteChecklistItemHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatchChecklist({
      type: 'DELETE_CHECKLIST_ITEM',
      payload: {
        idCheckArray: id,
        idCheck: Number(event.currentTarget.dataset.id),
        // idBtn: String(event.currentTarget.dataset.btn),
      },
    });
    console.log(event.currentTarget.dataset.id);
  };

  useEffect(() => {
    dispatchChecklist({
      type: 'CHECKLIST_PERCENTAGE',
      payload: { id, percentage: percent },
    });
  }, [dispatchChecklist, id, percent]);

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id={id}
        icon={faListCheck}
        title={title}
        btnTitle='Delete'
        onClick={deleteCheckArrayHandler}
      />
      <div className='flex flex-col gap-1 text-gray-800'>
        <section className='flex flex-row justify-start items-center gap-4'>
          <h3 className='text-xs '>{`${percentage}%`}</h3>
          <div className={`w-[${percentage}%] h-2 rounded-full bg-gray-300`} />
        </section>
        <ul className='flex flex-col'>
          {checklistItems.map((item, i) => {
            return (
              <li
                key={i}
                className='relative group flex flex-row py-2 justify-center gap-4 cursor-pointer hover:bg-gray-200'
              >
                <input
                  data-id={i}
                  type='checkbox'
                  name={item.description}
                  className='w-5 mx-1 cursor-pointer'
                  checked={item.isChecked}
                  onChange={onChangeHandler}
                />
                <h2 className='w-full text-sm'>{item.description}</h2>
                <ChecklistOptions
                  idCheck={i}
                  openOptionsHandler={optionsHandler}
                />
                {item.isOptionOpen ? (
                  <ChecklistItemActions
                    id={i}
                    exitBtnHandler={optionsHandler}
                    deleteChecklistItemHandler={deleteChecklistItemHandler}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
        <section className='py-1.5 pl-10'>
          {!checklistForm ? (
            <NoIconBtn
              id='add-checklist-item'
              title='Add an item'
              onClick={checklistFormHandler}
            />
          ) : (
            <AddItemCheckList
              idCheckArray={id}
              idCheck={checklistItems.length}
              checklistFormHandler={checklistFormHandler}
            />
          )}
        </section>
      </div>
    </div>
  );
};
export default Checklist;
