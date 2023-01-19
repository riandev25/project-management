const BOARD_LIST = ['PM', 'NEW PM'];

const BoardList = () => {
  return (
    <div className='flex flex-col'>
      <h1>Your workspaces</h1>
      <ul className='flex flex-row'>
        {BOARD_LIST.map((item) => {
          return (
            <li className='relative h-16 w-16 bg-blue-500' key={item}>
              <h3 className='absolute top-0 left-0'>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
