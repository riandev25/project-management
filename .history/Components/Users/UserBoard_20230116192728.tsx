import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row justify-center w-full py-8'>
      <UserNavigation />
      <BoardList />
    </div>
  );
};
export default UserBoard;
