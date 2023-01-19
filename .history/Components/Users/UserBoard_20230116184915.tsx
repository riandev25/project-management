import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row justify-center items-center min-h-screen'>
      <UserNavigation />
      <BoardList />
    </div>
  );
};
export default UserBoard;
