import { stringify } from 'querystring';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { useCreateCheckitem } from '../../../lib/hooks/checklist/useCreateCheckitem';
import { useCreateChecklist } from '../../../lib/hooks/checklist/useCreateChecklist';
import { capitalizeFirstLetter } from '../../../lib/utils/captitalizeString';
import { cardIdStore } from '../../../store/cardStore';
import { featureStore } from '../../../store/featureStore';
import { SubmitBtn } from '../../../UI/Buttons/Buttons';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistModal = () => {
  const [checklist, setChecklist] = useState<string>('');

  // Checklist post request data fetching
  const { mutateAsync: mutateCreateChecklist, isLoading: isCreateListLoading } =
    useCreateChecklist();

  // Global store for features: label, checklist, etc
  const { toggleFeatureModal } = featureStore((state) => ({
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  const { idCard } = cardIdStore(
    (state) => ({
      idCard: state.idCard,
    }),
    shallow
  );

  // Handler
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateCreateChecklist({
      name: capitalizeFirstLetter(checklist),
      idCard: String(idCard),
    });
    setChecklist('');
  };

  return (
    <form
      className='absolute top-2 -left-12 lg:left-0 flex flex-col w-[calc(100vw-32px)] xs:w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'
      onSubmit={onSubmit}
    >
      <HeaderModal
        title='Checklist'
        id='checklist-option'
        idFeature='checklist-option'
        leftBtn={false}
        exitBtnHandler={toggleFeatureModal}
      />
      <section className='flex flex-col gap-3'>
        <div>
          <h3 className='text-xs font-semibold text-gray-600'>Title</h3>
          <input
            type='text'
            data-id='add-checklist'
            name='add-checklist'
            value={checklist}
            required
            disabled={isCreateListLoading}
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Checklist'
            onChange={(e) => setChecklist(e.target.value)}
          />
        </div>
      </section>
      <SubmitBtn
        id='checklist-option'
        name={isCreateListLoading ? 'Creating...' : 'Create'}
        disabled={isCreateListLoading}
        bgColor={
          isCreateListLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
        }
      />
    </form>
  );
};
export default ChecklistModal;
