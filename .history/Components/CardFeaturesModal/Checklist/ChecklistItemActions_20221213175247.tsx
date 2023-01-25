import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

interface IChecklistItemActions {
  id: number;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChecklistItemActions = ({
  id,
  exitBtnHandler,
}: IChecklistItemActions) => {
  return (
    <div className='absolute z-20 top-2 right-0 flex flex-col px-3 py-2 gap-2 bg-gray-200'>
      <HeaderModal
        title='Item actions'
        idFeature={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <section className=''>
        <button type='button' className='w-full text-sm'>
          Convert to card
        </button>
        <button type='button' className='w-full text-sm'>
          Delete
        </button>
      </section>
    </div>
  );
};
export default ChecklistItemActions;