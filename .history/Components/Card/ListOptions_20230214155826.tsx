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
      className={`absolute z-20 ${pos} shadow-md bg-white rounded-sm text-gray-500`}
    >
      <header className='relative py-2 mx-2 w-40 border-b text-center'>
        <h2 className='font-semibold'>List of Actions</h2>
        <button
          type='button'
          data-id={_id}
          className='absolute top-2 right-0 transition-opacity hover:text-gray-400'
          onClick={toggleHandler}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='flex flex-col'>
        {actions.map(({ name, action }, i) => {
          return (
            <button
              key={i}
              type='button'
              className='w-full p-2'
              onClick={action}
            >
              {name}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default ListOptions;
