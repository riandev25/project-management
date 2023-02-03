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
import { checkitemStore, checklistStore } from '../../../store/checklistStore';
import { useGetData } from '../../../lib/hooks/dataFetching/useGetData';
import { getChecklistPercentage } from '../../../lib/utils/checklistPercentage';
import { shallow } from 'zustand/shallow';
import { filterChecklist } from '../../../lib/utils/filterChecklist';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
import {
  removeLocalStorage,
  setLocalStorage,
} from '../../../lib/utils/localStorage';
import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
import ChecklistMilestone from './ChecklistMilestone';

const Checklist = ({ _id, name, checkitem }: IChecklistArrays) => {
  const [checklistForm, setAddCheckListForm] = useState<boolean>(false);
  const [percentages, setPercentages] = useState<string>('35');

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

  const { checkitemState } = checkitemStore(
    (state) => ({
      checkitemState: state.checkitemState,
    }),
    shallow
  );

  // Get boolean value when adding check item or not
  const isAddCheckitem = filterChecklist(checklistState, _id, 'addCheckitem');

  // Get boolean value when option is open or not
  // const isOptionOpen = filterChecklist(checklistState, _id, 'option');

  const { refetch } = useGetCheckitems();
  const { mutateAsync: updateMutate } = useUpdateCheckitem();

  const addCheckitemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    console.log(_id);
    toggleAddCheckitem(_id);
  };

  const updateCheckboxHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkitemId = String(event.currentTarget.dataset.id);
    setLocalStorage('checkitemId', checkitemId);
    const checkedData = event.target.checked === true ? true : false;
    await updateMutate({ isChecked: checkedData });
    removeLocalStorage('checkitemId');
    refetch();
  };

  const toggleOptionsExtension = (isOptionOpen: boolean | undefined) => {
    // console.log(isOptionOpen);
  };

  // useEffect(() => {
  //   const percent = getChecklistPercentage(checkitem);
  //   setPercentages(percent);
  // }, [checkitem]);

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
          {/* {percentages !== '' && (
            <ChecklistMilestone percentages={percentages} />
          )} */}
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
                  onChange={updateCheckboxHandler}
                />
                <h2 className='w-full text-sm'>{item.name}</h2>
                <ChecklistOptions
                  idCheck={item?._id}
                  toggleOptionsExtension={toggleOptionsExtension}
                  openOptionsHandler={optionsHandler}
                />
                {/* {isOptionOpen ? (
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
                checkitemLength={checkitem.length}
                checklistFormHandler={toggleAddCheckitem}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Checklist;
