import { Editor } from '@tiptap/react';

interface IListModal {
  toggleBtn: boolean;
  setToggleBtn: (value: boolean) => void;
  editor: Editor;
}

const OTHER = [
  {
    id: 'bulletList',
    text: 'Bullet list',
    keyShortcut: 'Shift+8',
  },
  {
    id: 'orderedList',
    text: 'Numbered list',
    keyShortcut: 'Shift+7',
  },
];

const ListModal = ({ toggleBtn, setToggleBtn, editor }: IListModal) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    if (id === 'bulletList') {
      editor.chain().focus().toggleBulletList().run();
    } else if (id === 'orderedList') {
      editor.chain().focus().toggleOrderedList().run();
    }
    setToggleBtn(!toggleBtn);
  };

  return (
    <div
      className={`absolute z-30 top-8 -left-10 sm:left-2 ${
        toggleBtn ? 'grid' : 'hidden'
      } grid-cols-1 w-[calc(100vw-32px)] xs:w-72 border border-gray-300 rounded-md shadow-md bg-white`}
    >
      {OTHER.map((item, i) => {
        return (
          <button
            key={i}
            data-id={item.id}
            type='button'
            className={`${
              editor.isActive(item.id)
                ? 'bg-gray-500 text-white'
                : 'text-gray-800 hover:bg-gray-200'
            } flex flex-row justify-between items-center w-full h-9 border px-5 text-sm`}
            onClick={onClickHandler}
          >
            <span>{item.text}</span>
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
export default ListModal;
