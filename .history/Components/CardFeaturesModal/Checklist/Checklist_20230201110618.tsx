import { faListCheck } from '@fortawesome/free-solid-svg-icons';
// import { NoIconBtn } from '../../../UI/Buttons/NoIconBtn';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import { IChecklistArrays } from '../../../interfaces/checklist';
import AddItemCheckList from './AddItemCheckList';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import ChecklistOptions from './ChecklistOptions';
import ChecklistItemActions from './ChecklistItemActions';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import { checklistStore } from '../../../store/checklistStore';
import { useGetData } from '../../../lib/hooks/dataFetching/useGetData';
import { getChecklistPercentage } from '../../../lib/utils/checklistPercentage';
import { shallow } from 'zustand/shallow';
import { filterChecklist } from '../filterChecklist';

const Checklist = ({ _id, name, checkitem }: IChecklistArrays) => {
  const [checklistForm, setAddCheckListForm] = useState<boolean>(false);
  const [percentages, setPercentages] = useState<number>();

  const { dispatchChecklist } = useContext(ChecklistContext);

  // const checklistFormHandler = () => {
  //   setAddCheckListForm(!checklistForm);
  // };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // dispatchChecklist({
    //   type: 'TOGGLE_CHECKBOX',
    //   payload: {
    //     idCheckArray: id,
    //     idCheck: Number(event.currentTarget.dataset.id),
    //   },
    // });
  };

  // const checklistPercentage = () => {
  //   const percentItems = checkitem.filter((checklist) => {
  //     return checklist.isChecked ? checklist : undefined;
  //   });
  //   return Math.round((percentItems.length / checkitem.length) * 100);
  // };

  // const percent = checklistPercentage();

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
    // const btn = event.currentTarget.dataset.btn;
    // if (btn === 'option-btn') {
    //   dispatchChecklist({
    //     type: 'TOGGLE_OPTION',
    //     payload: {
    //       idCheckArray: id,
    //       idCheck: Number(event.currentTarget.dataset.effect),
    //       idBtn: String(event.currentTarget.dataset.btn),
    //     },
    //   });
    // } else if (btn === undefined) {
    //   dispatchChecklist({
    //     type: 'TOGGLE_OPTION',
    //     payload: {
    //       idCheckArray: id,
    //       idCheck: Number(event.currentTarget.dataset.effect),
    //       idBtn: String(event.currentTarget.dataset.btn),
    //     },
    //   });
    // }
  };

  const deleteChecklistItemHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // dispatchChecklist({
    //   type: 'DELETE_CHECKLIST_ITEM',
    //   payload: {
    //     idCheckArray: id,
    //     idCheck: Number(event.currentTarget.dataset.id),
    //     idBtn: String(event.currentTarget.dataset.btn),
    //   },
    // });
    // if (checklistItems.length === 1) {
    //   dispatchChecklist({
    //     type: 'DELETE_CHECKLIST',
    //     payload: {
    //       id: id,
    //     },
    //   });
    // }
  };

  // Updated

  const { checklistState, toggleAddCheckitem } = checklistStore(
    (state) => ({
      checklistState: state.checklistState,
      toggleAddCheckitem: state.toggleAddCheckitem,
    }),
    shallow
  );

  // Get boolean value when adding check item or not
  const isAddCheckitem = filterChecklist(checklistState, _id);

  const addCheckitemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleAddCheckitem(_id);
  };

  useEffect(() => {
    const percent = getChecklistPercentage(checkitem);
    setPercentages(percent);
  }, [checkitem]);

  // useEffect(() => {
  //   dispatchChecklist({
  //     type: 'CHECKLIST_PERCENTAGE',
  //     payload: { id, percentage: percent },
  //   });
  // }, [dispatchChecklist, id, percent]);

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id={_id}
        icon={faListCheck}
        title={name}
        btnTitle='Delete'
        onClick={deleteCheckArrayHandler}
      />
      <div className='flex flex-col gap-1 text-gray-800'>
        <section className='flex flex-row justify-start items-center gap-4'>
          <h3 className='text-xs '>{`${percentages}%`}</h3>
          <div className={`w-[${percentages}%] h-2 rounded-full bg-gray-300`} />
        </section>
        <ul className='flex flex-col'>
          {checkitem.map((item, i) => {
            return (
              <li
                key={i}
                className='relative group flex flex-row py-2 justify-center gap-4 cursor-pointer hover:bg-gray-200'
              >
                <input
                  data-id={item._id}
                  type='checkbox'
                  name={item.name}
                  className='w-5 mx-1 cursor-pointer'
                  checked={item.isChecked}
                  onChange={onChangeHandler}
                />
                <h2 className='w-full text-sm'>{item.name}</h2>
                <ChecklistOptions
                  idCheck={item._id}
                  openOptionsHandler={optionsHandler}
                />
                {/* {item.isOptionOpen ? (
                  <ChecklistItemActions
                    id={i}
                    exitBtnHandler={optionsHandler}
                    deleteChecklistItemHandler={deleteChecklistItemHandler}
                  />
                ) : null} */}
              </li>
            );
          })}
          <li className='py-1.5 pl-10'>
            {!isAddCheckitem ? (
              <NoIconBtn
                id={_id}
                title='Add an item'
                onClick={addCheckitemHandler}
              />
            ) : (
              <AddItemCheckList
                _id={_id}
                checklistFormHandler={toggleAddCheckitem}
              />
            )}
          </li>
        </ul>
        {/* <section className='py-1.5 pl-10'>
          {!isAddCheckItem ? (
            <NoIconBtn
              id='add-checklist-item'
              name='Add an item'
              onClick={toggleAddCheckItem}
            />
          ) : (
            <AddItemCheckList
              idCheckArray={id}
              idCheck={checklistItems.length}
              checklistFormHandler={toggleAddCheckItem}
            />
          )}
        </section> */}
      </div>
    </div>
  );
};
export default Checklist;
