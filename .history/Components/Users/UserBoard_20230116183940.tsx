import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row'>
      <UserNavigation />
      <BoardList />
    </div>
  );
};
export default UserBoard;
