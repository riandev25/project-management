import { Editor } from '@tiptap/react';
import {
  faFont,
  faChevronDown,
  faBold,
  faItalic,
  faEllipsis,
  faList,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { DualIconBtn, SingleIconBtn } from '../../../UI/Buttons/EditorMenuBtn';
import HeadingModal from './HeadingModal';
import { useState } from 'react';
import OtherModal from './OtherModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListModal from './ListModal';

interface IEditor {
  editor: Editor | null;
}

const MenuBar = ({ editor }: IEditor) => {
  const [toggleHeading, setToggleHeading] = useState<boolean>(false);
  const [toggleBold, setToggleBold] = useState<boolean>(false);
  const [toggleItalic, setToggleItalic] = useState<boolean>(false);
  const [toggleOther, setToggleOther] = useState<boolean>(false);
  const [toggleList, setToggleList] = useState<boolean>(false);

  if (!editor) {
    return null;
  }

  const toggleHeadingBtn = () => {
    setToggleHeading(!toggleHeading);
  };

  const toggleBoldBtn = () => {
    setToggleBold(!toggleBold);
  };

  const toggleItalicBtn = () => {
    setToggleItalic(!toggleItalic);
  };

  const toggleOtherBtn = () => {
    setToggleOther(!toggleOther);
  };

  const toggleListBtn = () => {
    setToggleList(!toggleList);
  };

  const SECOND_COL = [
    {
      id: 'bold-btn',
      icon: faBold,
      toggle: toggleBold,
      onClick: toggleBoldBtn,
    },
    {
      id: 'italic-btn',
      icon: faItalic,
      toggle: toggleItalic,
      onClick: toggleItalicBtn,
    },
    {
      id: 'other-btn',
      icon: faEllipsis,
      toggle: toggleOther,
      onClick: toggleOtherBtn,
    },
  ];

  return (
    <header className='flex flex-row justify-start py-2 w-full border border-gray-300'>
      <section className='relative px-2'>
        <DualIconBtn
          icon1={faFont}
          icon2={faChevronDown}
          onClick={toggleHeadingBtn}
          toggleBtn={toggleHeading}
        />
        <HeadingModal toggleBtn={toggleHeading} />
      </section>
      <section className='relative flex flex-row gap-1 px-2'>
        {SECOND_COL.map((item, i) => {
          return (
            <button
              key={i}
              type='button'
              className={`px-1.5 space-x-1 rounded-sm ${
                item.toggle
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-800 hover:bg-gray-200'
              }`}
              onClick={item.onClick}
            >
              <FontAwesomeIcon icon={item.icon} size='sm' />
            </button>
          );
        })}
        <OtherModal toggleBtn={toggleOther} />
      </section>
      <section className='relative px-2'>
        <DualIconBtn
          icon1={faList}
          icon2={faChevronDown}
          onClick={toggleListBtn}
          toggleBtn={toggleList}
        />
        <ListModal toggleBtn={toggleList} />
      </section>
      <section className='px-2'>
        <DualIconBtn icon1={faPlus} icon2={faChevronDown} />
      </section>
    </header>
  );
};

export default MenuBar;
