const UserNavigation = () => {
  return (
    // <aside className='flex w-96' aria-label='Sidebar'>
    <div className='min-w-max px-6 py-4 overflow-y-auto rounded bg-green-300 dark:bg-gray-800'>
      <ul className='w-64 space-y-1'>
        <li>
          <a
            href='#'
            className='flex items-center p-1 text-sm font-bold text-gray-800 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
              <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
            </svg>
            <span className='ml-3'>Boards</span>
          </a>
        </li>
        {/* <li>
          <a
            href='#'
            className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <svg
              aria-hidden='true'
              className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
            </svg>
            <span className='flex-1 ml-3 whitespace-nowrap'>Kanban</span>
            <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300'>
              Pro
            </span>
          </a>
        </li> */}
      </ul>
      {/* <ul className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
        <li>
          <a
            href='#'
            className='flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
          >
            <svg
              aria-hidden='true'
              className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400'
              focusable='false'
              data-prefix='fas'
              data-icon='gem'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z'
              ></path>
            </svg>
            <span className='ml-4'>Upgrade to Pro</span>
          </a>
        </li>
      </ul> */}
    </div>
    // </aside>
  );
};
export default UserNavigation;
