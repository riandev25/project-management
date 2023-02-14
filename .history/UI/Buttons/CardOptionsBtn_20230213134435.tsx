type OperationType = {
  operation: string;
  idCard?: string;
  action: () => void;
};

const CardOptionButton = ({ operation, action, idCard }: OperationType) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    action();
  };

  return (
    <button
      type='button'
      className='flex w-full p-1.5 text-start text-white hover:bg-gray-200'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      onClick={onClickHandler}
    >
      {operation}
    </button>
  );
};

export default CardOptionButton;
