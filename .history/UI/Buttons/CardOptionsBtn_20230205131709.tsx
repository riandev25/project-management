type OperationType = {
  operation: string;
  idCard: string
  action: (_id: string) => void
};

const CardOptionButton = ({ operation, action, idCard }: OperationType) => {

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id)
    action(_id)
  }

  return (
    <button
      type='button'
      className='flex w-full p-1.5 text-start hover:bg-gray-200'
      onClick={onClickHandler}
    >
      <h2>{operation}</h2>
    </button>
  );
};

export default CardOptionButton;
