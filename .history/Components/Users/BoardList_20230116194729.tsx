const BOARD_LIST = ['PM', 'NEW PM'];

const BoardList = () => {
  return (
    <div className='flex flex-col w-[50rem] pl-3 pr-6 text-gray-700 font-bold'>
      <h1 className='px-2 py-3'>Your workspaces</h1>
      <ul className='grid grid-cols-3 md:grid-cols-4 gap-4'>
        {BOARD_LIST.map((item) => {
          return (
            <li className='relative h-24 bg-blue-600 rounded-md' key={item}>
              <h3 className='absolute top-2 left-2 text-gray-200'>{item}</h3>
            </li>
          );
        })}
        <li className='flex justify-center items-center h-24 bg-blue-200 rounded-md'>
          <h3 className='text-gray-200'>Create board</h3>
        </li>
      </ul>
    </div>
  );
};

export default BoardList;
