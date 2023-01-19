const BOARD_LIST = ['PM', 'NEW PM'];

const BoardList = () => {
  return (
    <div className='flex flex-col w-3/5 bg-red-200'>
      <h1>Your workspaces</h1>
      <ul className='grid grid-cols-4'>
        {BOARD_LIST.map((item) => {
          return (
            <li className='relative h-24 w-44 bg-blue-500' key={item}>
              <h3 className='absolute top-0 left-0'>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
