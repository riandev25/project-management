import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

interface IChecklistItemActions {
  id: number;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
  deleteChecklistItemHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChecklistItemActions = ({
  id,
  exitBtnHandler,
  deleteChecklistItemHandler,
}: IChecklistItemActions) => {
  return (
    <div className='absolute z-20 top-2 right-0 flex flex-col px-2 py-1.5 bg-gray-300 rounded-md shadow-md'>
      <HeaderModal
        title='Item actions'
        idFeature={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <section className='space-y-1 border-t-2 py-0.5 border-gray-500'>
        <button
          data-id={id}
          type='button'
          className='w-full text-sm bg-gray-300 hover:bg-gray-400'
        >
          Convert to card
        </button>
        <button
          data-id={id}
          type='button'
          className='w-full text-sm bg-gray-300 hover:bg-gray-400'
          onClick={deleteChecklistItemHandler}
        >
          Delete
        </button>
      </section>
    </div>
  );
};
export default ChecklistItemActions;
