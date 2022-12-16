import { Editor } from '@tiptap/react';
import { SetStateAction, Dispatch } from 'react';

interface IHeadingModal {
  toggleBtn: boolean;
  setToggleBtn: Dispatch<SetStateAction<boolean>>;
  editor: Editor;
}

const HEADING = [
  {
    id: 'normal-text-btn',
    text: 'Normal text',
    size: 'base',
    heading: 5,
  },
  {
    id: 'heading-1-btn',
    text: '1',
    size: '4xl',
    heading: 1,
  },
  {
    id: 'heading-2-btn',
    text: '2',
    size: '4xl',
    heading: 2,
  },
  {
    id: 'heading-3-btn',
    text: '3',
    size: 'xl',
    heading: 3,
  },
  {
    id: 'heading-4-btn',
    text: '4',
    size: 'lg',
    heading: 4,
  },
  {
    id: 'heading-5-btn',
    text: '5',
    size: 'base',
    heading: 5,
  },
  {
    id: 'heading-6-btn',
    text: '6',
    size: 'sm',
    heading: 6,
  },
];

const HeadingModal = ({ toggleBtn, setToggleBtn, editor }: IHeadingModal) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const heading = Number(event.currentTarget.dataset.heading);
    switch (heading) {
      case 1:
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      case 2:
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      case 3:
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      case 4:
        editor.chain().focus().toggleHeading({ level: 4 }).run();
      case 5:
        editor.chain().focus().toggleHeading({ level: 5 }).run();
      case 6:
        editor.chain().focus().toggleHeading({ level: 6 }).run();
    }
    setToggleBtn(!toggleBtn);
  };

  return (
    <div
      className={`absolute z-30 top-8 left-2 ${
        toggleBtn ? 'grid' : 'hidden'
      } grid-cols-1 w-64 border border-gray-300 shadow-md bg-white`}
    >
      {HEADING.map((item, i) => {
        return (
          <button
            key={i}
            id={item.id}
            data-heading={item.heading}
            type='button'
            className={`${
              editor.isActive('heading', { level: 2 })
                ? 'bg-gray-500 text-white'
                : 'text-gray-800 hover:bg-gray-200'
            } flex flex-row justify-between items-center w-full h-10 border px-5 text-[24px]`}
            onClick={onClickHandler}
          >
            <span>{i === 0 ? item.text : `Heading-${item.text}`}</span>
            <span
              className={`py-0.5 px-1 bg-gray-200 text-[9px] text-gray-500`}
            >
              {`Ctrl+Alt+${i === 0 ? '0' : item.text}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default HeadingModal;
