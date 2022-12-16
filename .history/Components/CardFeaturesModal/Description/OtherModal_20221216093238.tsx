interface IHeadingModal {
  toggleBtn: boolean;
}

const HEADING = [
  {
    id: 'normal-text-btn',
    text: 'Strikethrough',
    keyShortcut: 'Shift+S',
  },
  {
    id: 'heading-1-btn',
    text: 'Code',
    keyShortcut: 'Shift+M',
  },
  {
    id: 'heading-2-btn',
    text: 'Clear formatting',
    keyShortcut: '/',
  },
];

const HeadingModal = ({ toggleBtn }: IHeadingModal) => {
  return (
    <div
      className={`absolute z-30 top-8 left-2 ${
        toggleBtn ? 'grid' : 'hidden'
      } grid-cols-1 w-52 border border-gray-300 shadow-md bg-white`}
    >
      {HEADING.map((item, i) => {
        return (
          <button
            key={i}
            id={item.id}
            type='button'
            className={`flex flex-row justify-between items-center w-full h-7 border px-5 text-base hover:bg-gray-200`}
          >
            <span className={`text-gray-800`}>{item.text}</span>
            <span className={`p-0.5 bg-gray-300 text-[9px] text-gray-500`}>
              {`Ctrl+${item.text}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default HeadingModal;
