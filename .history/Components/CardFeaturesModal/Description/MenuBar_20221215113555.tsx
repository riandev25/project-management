import { Editor } from '@tiptap/react';
import {
  faFont,
  faChevronDown,
  faBold,
  faItalic,
  faEllipsis,
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
    <header>
      <section>
        <button type='button'>
          <FontAwesomeIcon icon={faFont} />
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </section>
      <nav>
        {SECOND_COL.map((item, i) => {
          return (
            <button key={i} type='button'>
              <FontAwesomeIcon icon={item.icon} />
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default MenuBar;
