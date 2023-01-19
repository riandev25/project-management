const BOARD_LIST = ['PM', 'NEW PM'];

const BoardList = () => {
  return (
    <div className='flex flex-col w-[50rem] bg-red-200 text-gray-700 font-bold'>
      <h1 className='px-2 py-3'>Your workspaces</h1>
      <ul className='grid grid-cols-4 gap-4'>
        {BOARD_LIST.map((item) => {
          return (
            <li className='relative h-24 bg-blue-500 rounded-sm' key={item}>
              <h3 className='absolute top-1 left-1 text-gray-200'>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
