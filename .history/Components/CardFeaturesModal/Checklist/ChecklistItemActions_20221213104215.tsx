import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistItemActions = () => {
  const { isChecklistItemOpen } = useFeatureState();
  const { dispatchFeature } = useContext(FeatureContext);

  const exitBtnHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'checklist-item-option' },
    });
  };

  return (
    <div className='absolute top-0 right-0 flex flex-col gap-4'>
      <HeaderModal
        title='Item actions'
        idFeature='checklist-item-option'
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <section className=''>
        <button type='button' className='w-full'>
          Convert to card
        </button>
        <button type='button' className='w-full'>
          Delete
        </button>
      </section>
    </div>
  );
};
export default ChecklistItemActions;
