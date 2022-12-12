import { NoIconLarge } from '../../../UI/Buttons/Buttons';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistModal = () => {
  const addChecklistArray = () => {};

  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Labels'
        idFeature='labels-option'
        leftBtn={false}
        // exitBtnHandler={onExitBtnHandler}
      />
      <input
        type='text'
        data-id='search-label'
        name='search-label'
        // value={searchLabel}
        className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
        placeholder='Search labels...'
        // onChange={onSearchChangeHandler}
      />
      <NoIconLarge
        id='checklist-option'
        name='Add'
        bgColor='bg-blue-600 hover:bg-blue-700'
        onClickHandler={addChecklistArray}
      />
    </div>
  );
};
export default ChecklistModal;
