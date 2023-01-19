import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row justify-center'>
      <UserNavigation />
      <BoardList />
    </div>
  );
};
export default UserBoard;
