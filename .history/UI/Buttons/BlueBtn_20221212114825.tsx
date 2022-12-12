interface IBlueBtn {
  id: string;
  name: string;
  bgColor: string;
  onClickHandler(): void;
}

const BlueBtn = ({ id, name, bgColor, onClickHandler }: IBlueBtn) => {
  return (
    <button
      data-id={id}
      type='button'
      className={`flex justify-center items-center ${bgColor} w-16 py-1 text-sm text-white rounded-sm`}
      onClick={onClickHandler}
    >
      {name}
    </button>
  );
};

export default BlueBtn;
