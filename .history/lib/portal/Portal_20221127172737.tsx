import { ReactNode, useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
  children: ReactNode;
}

const Portal = ({ children }: PortalProp) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector('#myportal') as HTMLInputElement
      )
    : null;
};

export default Portal;
