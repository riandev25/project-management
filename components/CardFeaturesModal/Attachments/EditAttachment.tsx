import * as yup from 'yup';

const EditAttachment = () => {
  const schema = yup.object().shape({
    fileName,
  });

  const onSubmitHandler = () => {};

  return (
    <form
      className='flex flex-col w-[17rem] rounded-sm bg-gray-300 p-1.5 gap-2 text-sm text-gray-500'
      onSubmit={onSubmitHandler}
    >
      <input
        type='text'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder='Enter list title...'
        className='w-full py-2 px-3'
      />
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-2'>
          <button
            type='submit'
            className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
          >
            {isLoading ? 'Adding list...' : 'Add list'}
          </button>
          <button
            type='button'
            className='hover:text-gray-400'
            onClick={toggleFormHandler}
          >
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </button>
        </section>
        <button type='button'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </form>
  );
};
export default EditAttachment;
