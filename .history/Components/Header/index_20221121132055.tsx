import Navigation from './Navigation';

const NAV_LIST = ['Proyekto', 'Recent', 'Saved', 'Templates', 'Create'];

const Header = () => {
  return (
    <header className='flex flex-row justify-between'>
      <Navigation nav={NAV_LIST} />
    </header>
  );
};

export default Header;
