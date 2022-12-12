import { stringify } from 'querystring';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { SubmitBtn } from '../../../UI/Buttons/Buttons';
import HeaderModal from '../../../UI/Feature/HeaderModal';

interface IChecklist {
  title?: string;
  checklist?: string;
}

const ChecklistModal = () => {
  // Context
  const { dispatchFeature } = useContext(FeatureContext);
  const { checklistData, dispatchChecklist } = useContext(ChecklistContext);

  const [addChecklist, setAddChecklist] = useState<IChecklist>({
    title: '',
    checklist: '',
  });

  const onExitBtnHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'checklist-option' },
    });
  };

  // const addChecklistArray = () => {

  // };

  const onChangeHandler = () => {};

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchChecklist({
      type: 'ADD_CHECKLIST',
      payload: { data: addChecklist, idCheckArray: checklistData.length },
    });
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'checklist-option' },
    });
  };

  return (
    <form
      className='absolute top-2 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'
      onSubmit={onSubmit}
    >
      <HeaderModal
        title='Labels'
        idFeature='checklist-option'
        leftBtn={false}
        exitBtnHandler={onExitBtnHandler}
      />
      <section className='flex flex-col gap-1'>
        <h3 className='text-xs font-semibold text-gray-600'>Title</h3>
        <input
          type='text'
          data-id='add-checklist-array'
          name='add-checklist-array'
          value={addChecklist.title}
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder='Title'
          onChange={(event) => setAddChecklist({ title: event.target.value })}
        />
        <h3 className='text-xs font-semibold text-gray-600'>Title</h3>
        <input
          type='text'
          data-id='add-checklist-array'
          name='add-checklist-array'
          value={addChecklist.checklist}
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder='Title'
          onChange={(event) =>
            setAddChecklist({ checklist: event.target.value })
          }
        />
      </section>
      <SubmitBtn
        id='checklist-option'
        name='Add'
        bgColor='bg-blue-600 hover:bg-blue-700'
      />
    </form>
  );
};
export default ChecklistModal;
