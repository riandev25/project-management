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
    <header className='flex flex-row justify-start py-2.5 w-full'>
      <section className='px-2'>
        <button
          type='button'
          className='px-1.5 bg-red-300 space-x-1 rounded-sm'
        >
          <FontAwesomeIcon icon={faFont} size='sm' />
          <FontAwesomeIcon icon={faChevronDown} size='2xs' />
        </button>
      </section>
      <section className='flex flex-row gap-1 px-2'>
        {SECOND_COL.map((item, i) => {
          return (
            <button key={i} type='button' className='px-1.5 bg-red-300'>
              <FontAwesomeIcon icon={item.icon} size='sm' />
            </button>
          );
        })}
      </section>
      <section className='px-2'>
        <button type='button' className='px-1.5 bg-red-300 space-x-1'>
          <FontAwesomeIcon icon={faList} size='sm' />
          <FontAwesomeIcon icon={faChevronDown} size='2xs' />
        </button>
      </section>
      <section className='px-2'>
        <button type='button' className='px-1.5 bg-red-300 space-x-1'>
          <FontAwesomeIcon icon={faPlus} size='sm' />
          <FontAwesomeIcon icon={faChevronDown} size='2xs' />
        </button>
      </section>
    </header>
  );
};

export default MenuBar;
