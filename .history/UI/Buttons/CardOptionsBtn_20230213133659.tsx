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
      className='flex w-full p-1.5 text-start text-white bg-indigo-600 bg-opacity-80 background-filter hover:bg-gray-200'
      onClick={onClickHandler}
    >
      {operation}
    </button>
  );
};

export default CardOptionButton;
