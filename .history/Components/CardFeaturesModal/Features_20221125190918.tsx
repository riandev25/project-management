import { Fragment } from 'react';
import {
  faUser,
  faClock,
  faImage,
  faCopy,
  faEye,
  faTrashAlt,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faTag,
  faListCheck,
  faPaperclip,
  faArrowRight,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const FEATURES_BTN_DATA = [
  {
    id: 'members-btn',
    icon: faUser,
    name: 'Members',
  },
  {
    id: 'labels-btn',
    icon: faTag,
    name: 'Labels',
  },
  {
    id: 'checklist-btn',
    icon: faListCheck,
    name: 'Checklist',
  },
  {
    id: 'dates-btn',
    icon: faClock,
    name: 'Dates',
  },
  {
    id: 'attachment-btn',
    icon: faPaperclip,
    name: 'Attachment',
  },
  {
    id: 'cover-btn',
    icon: faImage,
    name: 'Cover',
  },
];

const ACTIONS_BTN_DATA = [
  {
    id: 'move-btn',
    icon: faArrowRight,
    name: 'Move',
  },
  {
    id: 'copy-btn',
    icon: faCopy,
    name: 'Copy',
  },
  {
    id: 'watch-btn',
    icon: faEye,
    name: 'Watch',
  },
  {
    id: 'archive-btn',
    icon: faTrashAlt,
    name: 'Archive',
  },
  {
    id: 'share-btn',
    icon: faShare,
    name: 'Share',
  },
];

const Features = () => {
  return (
    <Fragment>
      <div className='grid grid-cols-1 gap-2'>
        <h3 className='text-xs font-semibold'>Add to card</h3>
        <ul className='space-y-2'>
          {FEATURES_BTN_DATA.map((item) => {
            return (
              <li key={item.id}>
                <DefaultBtn
                  bgColor='bg-gray-100'
                  icon={item.icon}
                  iconColor='text-gray-600'
                  name={item.name}
                  fullWidth={true}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Add to card</h3>
        <ul>
          {ACTIONS_BTN_DATA.map((item) => {
            return (
              <li key={item.id}>
                <DefaultBtn
                  bgColor='bg-gray-300'
                  icon={item.icon}
                  iconColor='text-gray-300'
                  name={item.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
export default Features;
