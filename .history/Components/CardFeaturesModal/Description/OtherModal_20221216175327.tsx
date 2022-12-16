import { Editor } from '@tiptap/react';
import React from 'react';

interface IOtherModal {
  toggleBtn: boolean;
  setToggleBtn: React.Dispatch<React.SetStateAction<any>>;
  editor: Editor;
}

const OTHER = [
  {
    id: 'strike',
    text: 'Strikethrough',
    keyShortcut: 'Shift+S',
  },
  {
    id: 'code',
    text: 'Code',
    keyShortcut: 'Shift+M',
  },
  {
    id: 'clear',
    text: 'Clear formatting',
    keyShortcut: '/',
  },
];

const OtherModal = ({ toggleBtn, setToggleBtn, editor }: IOtherModal) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    if (id === 'strike') {
      editor.chain().focus().toggleStrike().run();
    } else if (id === 'code') {
      editor.chain().focus().toggleCode().run();
    } else if (id === 'clear') {
      editor.chain().focus().toggleStrike().unsetAllMarks().run();
    }
    // setToggleBtn(!toggleBtn);
  };

  console.log(setToggleBtn);

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
            className={`${
              editor.isActive(item.id)
                ? 'bg-gray-500 text-white'
                : 'text-gray-800 hover:bg-gray-200'
            } flex flex-row justify-between items-center w-full h-9 border px-5 text-sm`}
            onClick={onClickHandler}
          >
            <span className={`${i === 2 ? 'text-gray-500' : ''}`}>
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
