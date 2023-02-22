import Navigation from './Navigation';

const NAV_LIST = ['Project', 'Recent', 'Saved', 'Templates', 'Create'];

const Header = () => {
  return (
    <header className='flex flex-row justify-between bg-blue-600 text-white'>
      <Navigation nav={NAV_LIST} />
    </header>
  );
};

export default Header;
