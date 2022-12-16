interface IOtherModal {
  toggleBtn: boolean;
}

const OTHER = [
  {
    id: 'strike-btn',
    text: 'Strikethrough',
    keyShortcut: 'Shift+S',
  },
  {
    id: 'code-btn',
    text: 'Code',
    keyShortcut: 'Shift+M',
  },
  {
    id: 'clear-btn',
    text: 'Clear formatting',
    keyShortcut: '/',
  },
];

const OtherModal = ({ toggleBtn }: IOtherModal) => {
  return (
    <div
      className={`absolute z-30 top-8 left-2 ${
        toggleBtn ? 'grid' : 'hidden'
      } grid-cols-1 w-52 border border-gray-300 rounded-md shadow-md bg-white`}
    >
      {OTHER.map((item, i) => {
        return (
          <button
            key={i}
            data-id={item.id}
            type='button'
            className={`flex flex-row justify-between items-center w-full h-9 border px-5 text-sm hover:bg-gray-200`}
          >
            <span className={`${i === 2 ? 'text-gray-500' : 'text-gray-800'}`}>
              {item.text}
            </span>
            <span
              className={`p-0.5 rounded-sm bg-gray-200 text-[9px] text-gray-600`}
            >
              {`Ctrl+${item.keyShortcut}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default OtherModal;
