import { FormEvent, useContext, useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { useCreateCheckitem } from '../../../lib/hooks/checklist/useCreateCheckitem';
import { capitalizeFirstLetter } from '../../../lib/utils/captitalizeString';
import {
  getLocalStorage,
  removeLocalStorage,
} from '../../../lib/utils/localStorage';
import { cardIdStore, checklistIdStore } from '../../../store/cardStore';
import ChecklistFeatures from './ChecklistFeatures';

interface IAddItemChecklist {
  _id: string;
  checkitemLength: number;
  checklistFormHandler(_id: string): void;
}

const AddItemCheckList = ({
  _id,
  checkitemLength,
  checklistFormHandler,
}: IAddItemChecklist) => {
  const [addCheckList, setAddCheckList] = useState('');

  const { mutateAsync, isLoading, isSuccess } = useCreateCheckitem();

  // Checklist id global store
  const { idChecklist, removeIdChecklist } = checklistIdStore(
    (state) => ({
      idChecklist: state.idChecklist,
      removeIdChecklist: state.removeIdChecklist,
    }),
    shallow
  );

  const { idCard } = cardIdStore(
    (state) => ({
      idCard: state.idCard,
    }),
    shallow
  );

  const cancelAddCheckitemHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);
    checklistFormHandler(_id);
    removeIdChecklist();
    // removeLocalStorage('idChecklist');
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(idChecklist);
    // const idCard = getLocalStorage('idCard');
    const data = {
      name: capitalizeFirstLetter(addCheckList),
      pos: checkitemLength,
      isChecked: false,
      idCard,
      idChecklist,
    };
    await mutateAsync(data);
  };

  useEffect(() => {
    if (isSuccess) {
      checklistFormHandler(_id);
      // removeLocalStorage('idChecklist');
    }
  }, [_id, checklistFormHandler, isSuccess]);

  return (
    <form
      className='flex flex-col w-full gap-2 text-sm text-gray-600'
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
            {isLoading ? 'Creating...' : 'Add'}
          </button>
          <button
            type='button'
            disabled={isLoading}
            data-id={_id}
            className={`py-1.5 px-3 ${isLoading ? '' : 'hover:bg-gray-300'}`}
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
