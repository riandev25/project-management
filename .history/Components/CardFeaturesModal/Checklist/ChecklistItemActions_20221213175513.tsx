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
    <div className='absolute z-20 top-2 right-0 flex flex-col px-3 py-2 gap-1 bg-gray-300 shadow-md'>
      <HeaderModal
        title='Item actions'
        idFeature={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <section className='space-y-1'>
        <button
          type='button'
          className='w-full text-sm bg-gray-300 hover:bg-gray-400'
        >
          Convert to card
        </button>
        <button
          type='button'
          className='w-full text-sm bg-gray-300 hover:bg-gray-400'
        >
          Delete
        </button>
      </section>
    </div>
  );
};
export default ChecklistItemActions;
