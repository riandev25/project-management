interface SubmitBtn {
  id: string;
  name: string;
  bgColor: string;
  // onClickHandler(): void;
}

export const SubmitBtn = ({ id, name, bgColor }: SubmitBtn) => {
  return (
    <button
      data-id={id}
      type='submit'
      className={`flex justify-center items-center ${bgColor} w-16 py-1 text-sm text-white rounded-sm`}
      // onClick={onClickHandler}
    >
      {name}
    </button>
  );
};
