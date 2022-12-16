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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  if (!editor) {
    return null;
  }

  return (
    <header className='flex flex-row justify-start py-1 w-full'>
      <section className='px-1'>
        <button type='button' className='p-1 bg-red-300'>
          <FontAwesomeIcon icon={faFont} size='sm' />
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
        </button>
      </section>
      <section className='px-1'>
        {SECOND_COL.map((item, i) => {
          return (
            <button key={i} type='button'>
              <FontAwesomeIcon icon={item.icon} size='sm' />
            </button>
          );
        })}
      </section>
      <section className='px-1'>
        <button type='button'>
          <FontAwesomeIcon icon={faList} />
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </section>
      <section className='px-1'>
        <button type='button'>
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </section>
    </header>
  );
};

export default MenuBar;
