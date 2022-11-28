type OperationType = {
  operation: string;
};

const CardOptionsBtn = ({ operation }: OperationType) => {
  return (
    <button type='button' className='w-full'>
      <h2>{operation}</h2>
    </button>
  );
};
export default CardOptionsBtn;
