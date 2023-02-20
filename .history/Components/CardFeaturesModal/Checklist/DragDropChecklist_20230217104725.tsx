import { Fragment, useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { ICheckitemObject } from '../../../interfaces/checklist';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
import { getLocalStorage } from '../../../lib/utils/localStorage';
import ChecklistOptions from './ChecklistOptions';

interface IDragDropChecklist {
  data: ICheckitemObject[];
}

const DragDropChecklist = ({ data }: IDragDropChecklist) => {
  const [checkitemData, setCheckitemData] = useState(data || []);

  // Updates order of checkitems
  useEffect(() => {
    const arrayIdsOrder = getLocalStorage('taskOrder');

    if (!arrayIdsOrder && data?.length) {
      const idsOrderArray = data.map((task) => task._id);
      localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray));
    }

    let myArray;
    if (arrayIdsOrder?.length && data?.length) {
      myArray = arrayIdsOrder.map((pos: any) => {
        return data.find((el) => el._id === pos);
      });

      const newItems = data.filter((el) => {
        return !arrayIdsOrder.includes(el._id);
      });
      console.log(newItems);

      if (newItems?.length) myArray = [...newItems, ...myArray];
    }

    setCheckitemData(myArray || data);
  }, [data]);

  const { mutateAsync: updateMutate } = useUpdateCheckitem();

  const updateCheckboxHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkitemId = String(event.currentTarget.dataset.id);
    const checkedData = event.target.checked === true ? true : false;
    await updateMutate({ isChecked: checkedData, checkitemId });
  };

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

  return (
    <Fragment>
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
                          <h2 className='w-full text-sm'>{item.name}</h2>
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
    </Fragment>
  );
};
export default DragDropChecklist;
