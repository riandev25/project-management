import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Header>
      <main>{children}</main>
    </Header>
  );
};

export default Layout;
