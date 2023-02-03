import { FormEvent, useContext, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { useCreateCheckitem } from '../../../lib/hooks/checklist/useCreateCheckitem';
import { capitalizeFirstLetter } from '../../../lib/utils/captitalizeString';
import ChecklistFeatures from './ChecklistFeatures';

interface IAddItemChecklist {
  _id: string;
  checklistFormHandler(_id: string): void;
}

const AddItemCheckList = ({ _id, checklistFormHandler }: IAddItemChecklist) => {
  const { dispatchChecklist } = useContext(ChecklistContext);

  const [addCheckList, setAddCheckList] = useState('');

  const { mutateAsync, isLoading } = useCreateCheckitem();

  const cancelAddCheckitemHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);
    checklistFormHandler(_id);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = mutateAsync(addCheckList);
    // dispatchChecklist({
    //   type: 'ADD_CHECKLIST_ITEM',
    //   payload: {
    //     idCheckArray,
    //     idCheck,
    //     description: addCheckList,
    //   },
    // });
    console.log(a);
    checklistFormHandler(_id);
  };

  return (
    <form
      className='flex flex-col w-full gap-2 text-sm text-gray-500'
      onSubmit={onSubmit}
    >
      <textarea
        value={addCheckList}
        onChange={(event) =>
          setAddCheckList(capitalizeFirstLetter(event.target.value))
        }
        role='textbox'
        className='h-24 py-2.5 px-2 border-[3px] focus:border-blue-400 bg-white'
      />
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-4'>
          <button
            type='submit'
            disabled={isLoading}
            className='bg-blue-600 py-1.5 px-3 rounded-sm text-sm text-white hover:bg-blue-700'
          >
            Add
          </button>
          <button
            type='button'
            data-id={_id}
            className='py-1.5 px-3 hover:bg-gray-300'
            onClick={cancelAddCheckitemHandler}
          >
            Cancel
          </button>
        </section>
        <ChecklistFeatures />
      </div>
    </form>
  );
};
export default AddItemCheckList;
