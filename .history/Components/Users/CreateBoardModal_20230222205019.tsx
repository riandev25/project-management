import { SubmitBtn } from '../../UI/Buttons/Buttons';
import HeaderModal from '../../UI/Feature/HeaderModal';
import { useCreateBoard } from '../../lib/hooks/user/useCreateBoard';

const CreateBoardModal = () => {
  // Create board hook

  const { submitHandler, toggleModal, register } = useCreateBoard();

  return (
    <form
      className='absolute top-2 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'
      onSubmit={submitHandler}
    >
      <HeaderModal
        title='Create board'
        idFeature='create-board'
        leftBtn={false}
        exitBtnHandler={toggleModal}
      />
      <section className='flex flex-col gap-3'>
        <div>
          <label className='text-xs font-normal text-gray-600'>Title</label>
          <input
            type='text'
            data-id='add-title'
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Title'
            {...register('boardName')}
          />
        </div>
      </section>
      <SubmitBtn id='' name='Create' bgColor='bg-blue-600 hover:bg-blue-700' />
    </form>
  );
};
export default CreateBoardModal;
