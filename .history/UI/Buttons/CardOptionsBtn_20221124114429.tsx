type OperationType = {
  operation: string;
};

export const BasicOptions = ({ operation }: OperationType) => {
  return (
    <button
      type='button'
      className='w-full p-1.5 text-start bg-red-400 hover:bg-gray-400'
    >
      <h2>{operation}</h2>
    </button>
  );
};

export const AdvanceOptions = ({ operation }: OperationType) => {
  return (
    <button
      type='button'
      className='w-full p-1.5 border-gray-500 text-start hover:bg-gray-400'
    >
      <h2>{operation}</h2>
    </button>
  );
};
