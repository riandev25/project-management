import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IActions {
  name: string;
  action: () => void;
}

interface IListOptions {
  _id?: string;
  pos: string;
  actions: IActions[];
  exitHandler: (_id: string) => void;
}

const ListOptions = ({ _id, pos, exitHandler, actions }: IListOptions) => {
  // Event handlers
  const toggleHandler = () => {
    exitHandler(String(_id));
  };

  return (
    <div
      className={`absolute z-20 ${pos} shadow-md bg-white rounded-sm text-gray-600`}
    >
      <header className='relative py-2 mx-2 w-40 border-b text-center'>
        <h2 className='font-semibold'>List of Actions</h2>
        <button
          type='button'
          data-id={_id}
          className='absolute top-2 right-0 transition-opacity ease-in-out hover:text-gray-400'
          onClick={toggleHandler}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='flex flex-col'>
        {actions.map(({ name, action }, i) => {
          return (
            // <button
            //   key={i}
            //   type='button'
            //   // className='w-full p-2 transition-opacity duration-300 hover:bg-gray-200'
            //   className='w-full p-2 transition-opacity duration-500 hover:bg-gradient-to-r from-white to-gray-200'
            //   onClick={action}
            // >
            //   {name}
            // </button>
            <button
              key={i}
              onClick={action}
              className='btn relative inline-flex items-center justify-start p-2 overflow-hidden transition-all bg-white hover:bg-white group'
            >
              {/* purple box */}
              <span className='w-0 h-full bg-gray-200 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full -z-1'></span>
              <span className='w-full transition-colors duration-300 ease-in-out z-10'>
                {name}
              </span>
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default ListOptions;
