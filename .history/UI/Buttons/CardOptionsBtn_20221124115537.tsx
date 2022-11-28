type OperationType = {
  operation: string;
};

const CardOptionButton = ({ operation }: OperationType) => {
  return (
    <button
      type='button'
      className='flex w-full p-1.5 text-start hover:bg-gray-400'
    >
      <h2>{operation}</h2>
    </button>
  );
};

export default CardOptionButton;
