import { ReactNode } from 'react';
import Header from '../Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
