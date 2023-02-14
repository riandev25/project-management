import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import { IChecklistArrays } from '../../../interfaces/checklist';
import AddItemCheckList from './AddItemCheckList';
import { useContext, useEffect, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import ChecklistOptions from './ChecklistOptions';
import { checklistStore } from '../../../store/checklistStore';
import { getChecklistPercentage } from '../../../lib/utils/checklistPercentage';
import { shallow } from 'zustand/shallow';
import { filterChecklist } from '../../../lib/utils/filterChecklist';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
import {
  removeLocalStorage,
  setLocalStorage,
} from '../../../lib/utils/localStorage';
import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
import { useDeleteCheckitems } from '../../../lib/hooks/checklist/useDeleteCheckitems';
import { useDeleteChecklist } from '../../../lib/hooks/checklist/useDeleteChecklist';
import { checklistIdStore } from '../../../store/cardStore';

const Checklist = ({ _id, name, checkitem }: IChecklistArrays) => {
  const [percentages, setPercentages] = useState<string>('');

  // Checklist global store
  const { checklistState, toggleAddCheckitem } = checklistStore(
    (state) => ({
      checklistState: state.checklistState,
      toggleAddCheckitem: state.toggleAddCheckitem,
    }),
    shallow
  );

  // Checklist id global store
  const { updateIdChecklist } = checklistIdStore((state) => ({
    updateIdChecklist: state.updateIdChecklist,
    idChecklist: state.idChecklist,
  }));

  // Get boolean value when adding check item or not
  const isAddCheckitem = filterChecklist(checklistState, _id, 'addCheckitem');

  // // Get checklist items of a single checklist
  // const filteredCheckItem = checkitem.filter(
  //   (checkitem) => checkitem.idChecklist === _id
  // );

  // Checklist data fetching
  const { mutateAsync: updateMutate } = useUpdateCheckitem();
  const { mutateAsync: deleteItemMutate, isLoading: isDeleteItemLoading } =
    useDeleteCheckitems();
  const { mutateAsync: deleteListMutate, isLoading: isDeleteListLoading } =
    useDeleteChecklist();

  // Event handlers
  const addCheckitemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleAddCheckitem(_id);
    updateIdChecklist(_id);
  };

  const updateCheckboxHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkitemId = String(event.currentTarget.dataset.id);
    const checkedData = event.target.checked === true ? true : false;
    await updateMutate({ isChecked: checkedData, checkitemId });
    // const percent = getChecklistPercentage(filteredCheckItem);
    // setPercentages(percent);
  };

  const deleteChecklistHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = String(event.currentTarget.dataset.id);
    deleteItemMutate(id);
    deleteListMutate(id);
  };

  // Update percentage completion of checklist
  useEffect(() => {
    const filteredCheckItem = checkitem.filter(
      (checkitem) => checkitem.idChecklist === _id
    );
    const percent = getChecklistPercentage(filteredCheckItem);
    setPercentages(percent);
  }, [filteredCheckItem]);

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id={_id}
        icon={faListCheck}
        title={name}
        rightBtn={true}
        btnTitle={
          isDeleteListLoading && isDeleteItemLoading ? 'Deleting ...' : 'Delete'
        }
        onClick={deleteChecklistHandler}
      />
      <div className='flex flex-col gap-1 text-gray-800'>
        <section className='flex flex-row justify-start items-center gap-4'>
          <h3 className='text-xs '>
            {`${percentages === 'NaN' ? '0' : percentages}%`}
          </h3>

          <div className={`w-[${percentages}%] h-2 rounded-full bg-gray-300`} />
        </section>
        <ul className='flex flex-col'>
          {filteredCheckItem.length > 0 ? (
            filteredCheckItem.map((item, i) => {
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
                  <ChecklistOptions id={item?._id} />
                </li>
              );
            })
          ) : (
            <li className='text-center'>
              <p className='text-sm'>
                Checklist not found. Add checklist item using the button below.
              </p>
            </li>
          )}
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
