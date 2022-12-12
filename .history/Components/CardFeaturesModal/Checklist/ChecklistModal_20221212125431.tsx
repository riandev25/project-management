import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { NoIconLarge } from '../../../UI/Buttons/Buttons';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistModal = () => {
  // Context
  const { dispatchFeature } = useContext(FeatureContext);

  const onExitBtnHandler = (id: string, effect: string) => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: effect },
    });
  };

  const addChecklistArray = () => {};

  return (
    <div className='absolute top-2 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
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
          // value={searchLabel}
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder='Title'
          // onChange={onSearchChangeHandler}
        />
      </section>
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
