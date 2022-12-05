import { ReactNode, useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
  portalId: string;
  children: ReactNode;
}

const Portal = ({ children, portalId }: PortalProp) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(portalId) as HTMLInputElement
      )
    : null;
};

export default Portal;
