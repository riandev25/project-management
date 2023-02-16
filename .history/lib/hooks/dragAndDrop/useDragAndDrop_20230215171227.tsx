import { ReactNode } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../../helper/dragAndDrop/StrictModeDroppable';

interface IUseDragAndDrop {
  children: ReactNode;
}

export const useDragAndDrop = ({ children }: IUseDragAndDrop) => {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='todos'>
        {(provided) => (
          <section {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => {
              return (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <article
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className='todo'>
                        <input
                          type='checkbox'
                          checked={todo.completed}
                          id={todo.id}
                          onChange={() =>
                            updateTodoMutation.mutate({
                              ...todo,
                              completed: !todo.completed,
                            })
                          }
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                      </div>
                      <button
                        className='trash'
                        onClick={() => handleDelete(todo.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
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
  );
};
