import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { useDeleteCheckitem } from '../../../lib/hooks/checklist/useDeleteCheckitem';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

interface IChecklistItemActions {
  id?: string;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
  // deleteChecklistItemHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChecklistItemActions = ({
  id,
  exitBtnHandler,
}: IChecklistItemActions) => {
  const { mutateAsync, isLoading: isDeleteLoading } = useDeleteCheckitem();

  const deleteCheckitemHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = String(event.currentTarget.dataset.id);
    mutateAsync(id);
  };

  return (
    <div className='flex flex-col w-36 px-2 py-1.5 bg-gray-300 rounded-md shadow-md'>
      <HeaderModal
        title='Item actions'
        id={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <section className='space-y-1 border-t-2 py-0.5 border-gray-500'>
        <button
          data-id={id}
          disabled={isDeleteLoading}
          type='button'
          className={`w-full text-sm bg-gray-300 ${
            isDeleteLoading ? '' : 'hover:bg-gray-400'
          }`}
          onClick={deleteCheckitemHandler}
        >
          {isDeleteLoading ? 'Deleting ...' : ''}
        </button>
      </section>
    </div>
  );
};
export default ChecklistItemActions;
