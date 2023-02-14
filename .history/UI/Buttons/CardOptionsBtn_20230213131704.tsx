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
      className='flex w-full p-1.5 text-start bg-green-300 opacity-75 translate-x-5 hover:bg-gray-200'
      onClick={onClickHandler}
    >
      <h2>{operation}</h2>
    </button>
  );
};

export default CardOptionButton;
