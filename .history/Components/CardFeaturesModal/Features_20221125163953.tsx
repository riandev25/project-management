import { faUser, faClock, faImage } from '@fortawesome/free-regular-svg-icons';
import {
  faTag,
  faListCheck,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

const FEATURES_BTN_DATA = [
  {
    id: 'members-btn',
    icon: faUser,
  },
  {
    id: 'labels-btn',
    icon: faTag,
  },
  {
    id: 'checklist-btn',
    icon: faListCheck,
  },
  {
    id: 'dates-btn',
    icon: faClock,
  },
  {
    id: 'attachment-btn',
    icon: faPaperclip,
  },
  {
    id: 'cover-btn',
    icon: faImage,
  },
];

const Features = () => {
  return (
    <div>
      <section>
        <h3>Add to card</h3>
      </section>
    </div>
  );
};
export default Features;
