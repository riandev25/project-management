import { stringify } from 'querystring';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { featureStore } from '../../../store/featureStore';
import { SubmitBtn } from '../../../UI/Buttons/Buttons';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistModal = () => {
  // Context
  const { dispatchFeature } = useContext(FeatureContext);
  const { checklistData, dispatchChecklist } = useContext(ChecklistContext);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { toggleFeatureModal } = featureStore((state) => ({
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  const onExitBtnHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'checklist-option' },
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchChecklist({
      type: 'ADD_CHECKLIST',
      payload: { title, description, idCheckArray: checklistData.length },
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
        title='Checklist'
        id='labels-option'
        idFeature='checklist-option'
        leftBtn={false}
        exitBtnHandler={toggleFeatureModal}
      />
      <section className='flex flex-col gap-3'>
        <div>
          <h3 className='text-xs font-semibold text-gray-600'>Title</h3>
          <input
            type='text'
            data-id='add-title'
            name='add-description'
            value={title}
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <h3 className='text-xs font-semibold text-gray-600'>Checklist</h3>
          <input
            type='text'
            data-id='add-description'
            name='add--description'
            value={description}
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Checklist'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
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
