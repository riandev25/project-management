import BoardList from './BoardList';
import UserNavigation from './UserNavigation';

const UserBoard = () => {
  return (
    <div className='flex flex-row justify-center w-full py-12'>
      <UserNavigation />
      <BoardList />
      <button type='button'>Log out</button>
    </div>
  );
};
export default UserBoard;
