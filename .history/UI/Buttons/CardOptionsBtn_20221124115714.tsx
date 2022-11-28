type OperationType = {
  operation: string;
};

const CardOptionButton = ({ operation }: OperationType) => {
  return (
    <input
      type='button'
      className='flex w-full p-1.5 text-start hover:bg-gray-400'
    >
      <h2>{operation}</h2>
    </input>
  );
};

export default CardOptionButton;
