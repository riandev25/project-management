const BOARD_LIST = ['PM', 'NEW PM'];

// interface IBoardList{
//   boardsData:
// }

const BoardList = () => {
  return (
    <div className='relative flex flex-col w-[50rem] pl-3 pr-6 text-gray-700 font-bold'>
      <h1 className='px-2 py-3'>Your workspaces</h1>
      <ul className='grid grid-cols-3 md:grid-cols-4 gap-4'>
        {BOARD_LIST.map((item) => {
          return (
            <li className='relative h-24 bg-blue-600 rounded-md' key={item}>
              <button className='w-full h-full'>
                <h3 className='absolute top-2 left-2 text-gray-200'>{item}</h3>
              </button>
            </li>
          );
        })}
        <li className='relative h-24 bg-gray-200 rounded-md'>
          <button className='flex justify-center items-center w-full h-full'>
            <h3 className='text-gray-700'>Create board</h3>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BoardList;
