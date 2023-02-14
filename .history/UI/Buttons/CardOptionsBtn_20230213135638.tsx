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
      className='flex w-full p-1.5 text-start text-white'
      style={{
        backgroundColor: hover ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)',
        transition: 'background-color 0.2s ease-in-out',
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
