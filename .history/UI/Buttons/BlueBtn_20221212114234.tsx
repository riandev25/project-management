const BlueBtn = () => {
  return (
    <button
      data-id={id}
      type='button'
      className='flex justify-center items-center bg-blue-600 w-16 py-1 text-sm text-white rounded-sm'
      onClick={isCreate ? createLabel : updateLabel}
    >
      {isCreate ? 'Create' : 'Save'}
    </button>
  );
};

export default BlueBtn;
