const HeaderModal = ({ title }) => {
  return (
    <div>
      <header className='flex justify-center items-center '>
        <h3 className='text-sm'>Labels</h3>
        <button
          type='button'
          className='absolute top-1 right-3'
          onClick={closeLabel}
        >
          <FontAwesomeIcon icon={faXmark} className='text-gray-500' />
        </button>
      </header>
    </div>
  );
};
export default HeaderModal;
