import { ReactNode } from 'react';
import Header from '../Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full bg-red-400'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
