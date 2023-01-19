import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row justify-center w-full'>
      <UserNavigation />
      <BoardList />
    </div>
  );
};
export default UserBoard;
