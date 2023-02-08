import { useEffect } from 'react';

const Error404 = () => {
  useEffect(() => {
    console.log('Useffect error');
  }, []);

  return <p>404 Error</p>;
};

export default Error404;
