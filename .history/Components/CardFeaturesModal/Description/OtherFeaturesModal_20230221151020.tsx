import { Editor } from '@tiptap/react';

interface IOtherFeaturesModal {
  toggleBtn: boolean;
  setToggleBtn: (value: boolean) => void;
  editor: Editor;
}

const OTHER = [
  {
    id: 'codeBlock',
    text: 'Code snippet',
    keyShortcut: '```',
  },
  {
    id: 'divider',
    text: 'Divider',
    keyShortcut: '---',
  },
  {
    id: 'blockquote',
    text: 'Blockquote',
    keyShortcut: '>',
  },
];

const OtherFeaturesModal = ({
  toggleBtn,
  setToggleBtn,
  editor,
}: IOtherFeaturesModal) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    if (id === 'codeBlock') {
      editor.chain().focus().toggleCodeBlock().run();
      console.log(editor.isActive('codeBlock'));
    } else if (id === 'divider') {
      editor.chain().focus().setHorizontalRule().run();
    } else if (id === 'blockquote') {
      editor.chain().focus().toggleBlockquote().run();
    }
    setToggleBtn(!toggleBtn);
  };

  return (
    <div
      className={`absolute z-30 top-8 -translate-x-36 sm:translate-x-0 sm:left-2 ${
        toggleBtn ? 'grid' : 'hidden'
      } grid-cols-1 w-52 border border-gray-300 rounded-md shadow-md bg-white`}
    >
      {OTHER.map((item, i) => {
        return (
          <button
            key={i}
            data-id={item.id}
            type='button'
            className={`flex flex-row justify-between items-center w-full h-9 border px-5 text-sm text-gray-800 hover:bg-gray-200`}
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
export default OtherFeaturesModal;
