import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

interface IChecklistItemActions {
  id: number;
  exitBtnHandler(id: string, effect: string): void;
}

const ChecklistItemActions = ({
  id,
  exitBtnHandler,
}: IChecklistItemActions) => {
  return (
    <div className='absolute z-20 top-0 right-0 flex flex-col gap-4'>
      <HeaderModal
        title='Item actions'
        idFeature={`checklist-item-option-${id}`}
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
