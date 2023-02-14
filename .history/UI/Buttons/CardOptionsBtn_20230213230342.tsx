import { useState } from 'react';

type OperationType = {
  operation: string;
  idCard?: string;
  action: () => void;
};

const CardOptionButton = ({ operation, action, idCard }: OperationType) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    action();
  };

  return (
    <button
      type='button'
      className='flex w-full p-1.5 text-start text-white hover:translate-x-4'
      style={{
        backgroundColor: hover ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.8)',
        transition: 'background-color 0.2s ease-in-out',
        // transform: hover ? 'translate-x-4' : 'translate-x-0',
      }}
      onClick={onClickHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {operation}
    </button>
  );
};

export default CardOptionButton;
