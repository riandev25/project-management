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

interface IEditor {
  editor: Editor | null;
}

const SECOND_COL = [
  {
    id: 'bold-btn',
    icon: faBold,
  },
  {
    id: 'italic-btn',
    icon: faItalic,
  },
  {
    id: 'more-btn',
    icon: faEllipsis,
  },
];

const MenuBar = ({ editor }: IEditor) => {
  const [toggleHeading, setToggleHeading] = useState<boolean>(false);
  const [toggleMore, setToggleMore] = useState<boolean>(false);
  const [toggleList, setToggleList] = useState<boolean>(false);

  if (!editor) {
    return null;
  }

  const toggleHeadingBtn = () => {
    setToggleHeading(!toggleHeading);
  };

  const toggleMoreBtn = () => {
    setToggleMore(!toggleMore);
  };

  const toggleListBtn = () => {
    setToggleList(!toggleList);
  };

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
      <section className='flex flex-row gap-1 px-2'>
        {SECOND_COL.map((item, i) => {
          return <SingleIconBtn key={i} icon={item.icon} />;
        })}
      </section>
      <section className='px-2'>
        <DualIconBtn icon1={faList} icon2={faChevronDown} />
      </section>
      <section className='px-2'>
        <DualIconBtn icon1={faPlus} icon2={faChevronDown} />
      </section>
    </header>
  );
};

export default MenuBar;
