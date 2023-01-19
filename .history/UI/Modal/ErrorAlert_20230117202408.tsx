interface IErrorAlert {
  errorMsg: string;
  additionalMsg: string;
  closeAlert: () => void;
}

const ErrorAlert = ({ errorMsg, additionalMsg, closeAlert }: IErrorAlert) => {
  return (
    <div className='absolute p-5 mb-4 text-white border border-red-400 rounded-lg shadow-md bg-red-700 transition dark:bg-gray-800 dark:text-red-400 dark:border-red-900'>
      <div className='flex items-center text-red-300'>
        <svg
          aria-hidden='true'
          className='w-5 h-5 mr-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'
          ></path>
        </svg>
        <span className='sr-only'>Info</span>
        <h3 className='text-lg font-medium'>{errorMsg}</h3>
      </div>
      <div className='mt-2 mb-4 text-sm'>{additionalMsg}</div>
      <div className='flex pt-4'>
        <button
          type='button'
          className='text-white bg-red-500 border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-400 dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:focus:ring-red-800'
          data-dismiss-target='#alert-additional-content-2'
          aria-label='Close'
          onClick={closeAlert}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert;
