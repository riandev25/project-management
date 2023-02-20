// import { faListCheck } from '@fortawesome/free-solid-svg-icons';
// import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
// import { IChecklistArrays } from '../../../interfaces/checklist';
// import AddItemCheckList from './AddItemCheckList';
// import { useContext, useEffect, useState } from 'react';
// import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
// import { NoIconBtn } from '../../../UI/Buttons/Buttons';
// import ChecklistOptions from './ChecklistOptions';
// import { checklistStore } from '../../../store/checklistStore';
// import { getChecklistPercentage } from '../../../lib/utils/checklistPercentage';
// import { shallow } from 'zustand/shallow';
// import { filterChecklist } from '../../../lib/utils/filterChecklist';
// import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
// import {
//   removeLocalStorage,
//   setLocalStorage,
// } from '../../../lib/utils/localStorage';
// import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
// import { useDeleteCheckitems } from '../../../lib/hooks/checklist/useDeleteCheckitems';
// import { useDeleteChecklist } from '../../../lib/hooks/checklist/useDeleteChecklist';
// import { checklistIdStore } from '../../../store/cardStore';

// const Checklist = ({ _id, name, checkitem }: IChecklistArrays) => {
//   const [percentages, setPercentages] = useState<string>('');

//   // Checklist global store
//   const { checklistState, toggleAddCheckitem } = checklistStore(
//     (state) => ({
//       checklistState: state.checklistState,
//       toggleAddCheckitem: state.toggleAddCheckitem,
//     }),
//     shallow
//   );

//   // Checklist id global store
//   const { updateIdChecklist } = checklistIdStore((state) => ({
//     updateIdChecklist: state.updateIdChecklist,
//     idChecklist: state.idChecklist,
//   }));

//   // Get boolean value when adding check item or not
//   const isAddCheckitem = filterChecklist(checklistState, _id, 'addCheckitem');

//   // // Get checklist items of a single checklist
//   const filteredCheckItem = checkitem.filter(
//     (checkitem) => checkitem.idChecklist === _id
//   );

//   // Checklist data fetching
//   const { mutateAsync: updateMutate } = useUpdateCheckitem();
//   const { mutateAsync: deleteItemMutate, isLoading: isDeleteItemLoading } =
//     useDeleteCheckitems();
//   const { mutateAsync: deleteListMutate, isLoading: isDeleteListLoading } =
//     useDeleteChecklist();

//   // Event handlers
//   const addCheckitemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const _id = String(event.currentTarget.dataset.id);
//     toggleAddCheckitem(_id);
//     updateIdChecklist(_id);
//   };

//   const updateCheckboxHandler = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const checkitemId = String(event.currentTarget.dataset.id);
//     const checkedData = event.target.checked === true ? true : false;
//     await updateMutate({ isChecked: checkedData, checkitemId });
//     // const percent = getChecklistPercentage(filteredCheckItem);
//     // setPercentages(percent);
//   };

//   const deleteChecklistHandler = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     const id = String(event.currentTarget.dataset.id);
//     deleteItemMutate(id);
//     deleteListMutate(id);
//   };

//   // Update percentage completion of checklist
//   useEffect(() => {
//     const filteredCheckItem = checkitem.filter(
//       (checkitem) => checkitem.idChecklist === _id
//     );
//     const percent = getChecklistPercentage(filteredCheckItem);
//     setPercentages(percent);
//   }, [_id, checkitem]);

//   return (
//     <div className='flex flex-col gap-4'>
//       <FeatureDisplayHeader
//         id={_id}
//         icon={faListCheck}
//         title={name}
//         rightBtn={true}
//         btnTitle={
//           isDeleteListLoading && isDeleteItemLoading ? 'Deleting ...' : 'Delete'
//         }
//         onClick={deleteChecklistHandler}
//       />
//       <div className='flex flex-col gap-1 text-gray-800'>
//         <section className='flex flex-row justify-start items-center gap-4'>
//           <h3 className='text-xs '>
//             {`${percentages === 'NaN' ? '0' : percentages}%`}
//           </h3>

//           <div className={`w-[${percentages}%] h-2 rounded-full bg-gray-300`} />
//         </section>
//         <section className='flex flex-col'>
//           {filteredCheckItem.length > 0 ? (
//             filteredCheckItem.map((item, i) => {
//               return (
//                 <div
//                   key={i}
//                   className='relative group flex flex-row py-2 justify-center gap-4 cursor-pointer hover:bg-gray-200'
//                 >
//                   <input
//                     data-id={item._id}
//                     type='checkbox'
//                     name={item.name}
//                     className='w-5 mx-1 cursor-pointer'
//                     checked={item.isChecked}
//                     onChange={updateCheckboxHandler}
//                   />
//                   <h2 className='w-full text-sm'>{item.name}</h2>
//                   <ChecklistOptions id={item?._id} />
//                 </div>
//               );
//             })
//           ) : (
//             <div className='text-center'>
//               <p className='text-sm'>
//                 Checklist not found. Add checklist item using the button below.
//               </p>
//             </div>
//           )}
//           <div className='py-1.5 pl-10'>
//             {!isAddCheckitem ? (
//               <NoIconBtn
//                 id={_id}
//                 title='Add an item'
//                 onClick={addCheckitemHandler}
//               />
//             ) : (
//               <AddItemCheckList
//                 _id={_id}
//                 checkitemLength={checkitem.length}
//                 checklistFormHandler={toggleAddCheckitem}
//               />
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
// export default Checklist;

import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import {
  ICheckitemObject,
  IChecklistArrays,
} from '../../../interfaces/checklist';
import AddItemCheckList from './AddItemCheckList';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import ChecklistOptions from './ChecklistOptions';
import {
  checkitemDragDropStore,
  checklistStore,
} from '../../../store/checklistStore';
import { getChecklistPercentage } from '../../../lib/utils/checklistPercentage';
import { shallow } from 'zustand/shallow';
import { filterChecklist } from '../../../lib/utils/filterChecklist';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
import {
  getArrayLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../../lib/utils/localStorage';
import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
import { useDeleteCheckitems } from '../../../lib/hooks/checklist/useDeleteCheckitems';
import { useDeleteChecklist } from '../../../lib/hooks/checklist/useDeleteChecklist';
import { checklistIdStore } from '../../../store/cardStore';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../../../lib/helper/dragAndDrop/StrictModeDroppable';
import React from 'react';

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
  const filteredCheckItem = useMemo(() => {
    return checkitem.filter((checkitem) => checkitem.idChecklist === _id);
  }, [checkitem, _id]);
  // const filteredCheckItem = checkitem.filter(
  //   (checkitem) => checkitem.idChecklist === _id
  // );

  const [checkitemData, setCheckitemData] = useState<Array<ICheckitemObject>>(
    filteredCheckItem || []
  );

  // Updates order of checkitems
  useEffect(() => {
    const arrayIdsOrder = getLocalStorage('taskOrder');

    if (!arrayIdsOrder && filteredCheckItem?.length) {
      const idsOrderArray = filteredCheckItem.map((task) => task._id);
      localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray));
    }

    let myArray;
    if (arrayIdsOrder?.length && filteredCheckItem?.length) {
      // myArray = arrayIdsOrder.map((pos: any) => {
      //   return filteredCheckItem.find((el) => el._id === pos);
      // });
      myArray = arrayIdsOrder
        .map((pos: any) => filteredCheckItem.find((el) => el._id === pos))
        .filter((el: any) => el !== undefined);

      // .filter((el: any) => el !== undefined);

      const newItems = filteredCheckItem.filter((el) => {
        return !arrayIdsOrder.includes(el._id);
      });

      if (newItems?.length) myArray = [...myArray, ...newItems];
      console.log(myArray);
    }

    setCheckitemData(myArray || filteredCheckItem);
  }, [filteredCheckItem]);

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
  };

  const deleteChecklistHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = String(event.currentTarget.dataset.id);
    deleteItemMutate(id);
    deleteListMutate(id);
  };

  // Event handler for dragging checkitem component
  const handleOnDragEnd = (result: DropResult) => {
    if (!result?.destination) return;

    if (checkitemData !== undefined) {
      const tasks = [...checkitemData];

      const [reorderedItem] = tasks.splice(result.source.index, 1);

      tasks.splice(result.destination.index, 0, reorderedItem);

      const idsOrderArray = tasks.map((task) => task._id);
      localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray));

      setCheckitemData(tasks);
    }
  };

  // Update percentage completion of checklist
  useEffect(() => {
    const filteredCheckItem = checkitem.filter((checkitem) => {
      if (checkitem.dueDate) {
        const dueDate = checkitem.dueDate.getTime < new Date().getTime;
        return checkitem.idChecklist === _id && dueDate;
      } else {
        return checkitem.idChecklist === _id;
      }
    });
    const percent = getChecklistPercentage(filteredCheckItem);
    setPercentages(percent);
  }, [_id, checkitem]);

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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='checkitems'>
            {(provided) => (
              <section
                className='flex flex-col'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {checkitemData.map((item, i) => {
                  return (
                    <Draggable
                      key={item._id}
                      draggableId={String(item._id)}
                      index={i}
                    >
                      {(provided) => (
                        <article
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div
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
                            <div className='w-full flex flex-row gap-3 justify-start items-center text-sm'>
                              <h2 className=''>{item.name}</h2>
                              {item.dueDate ? (
                                <span className='text-gray-600'>{`(Expires on ${item.dueDate})`}</span>
                              ) : null}
                            </div>
                            <ChecklistOptions id={item?._id} />
                          </div>
                        </article>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
        <section className='flex flex-col'>
          {checkitemData.length < 1 ? (
            <div className='text-center'>
              <p className='text-sm'>
                Checklist not found. Add checklist item using the button below.
              </p>
            </div>
          ) : null}
          <div className='py-1.5 pl-10'>
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
          </div>
        </section>
      </div>
    </div>
  );
};
export default Checklist;
