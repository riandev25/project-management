type OperationType = {
  operation: string;
};

const CardOptionsBtn = ({ operation }: OperationType) => {
  return (
    <button type='button' className='w-full py-1 hover:bg-gray-200'>
      <h2>{operation}</h2>
    </button>
  );
};
export default CardOptionsBtn;
