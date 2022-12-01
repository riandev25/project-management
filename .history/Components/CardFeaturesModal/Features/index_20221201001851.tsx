import { Fragment, useContext } from 'react';
import {
  faUser,
  faClock,
  faImage,
  faCopy,
  faEye,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faTag,
  faListCheck,
  faPaperclip,
  faArrowRight,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import LabelsModal from './LabelsModal';
import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';
import { CardChildren } from '../../../interfaces/data';

const Features = ({ labelsBtn }: CardChildren) => {
  const { FeatureState, openLabel } = useContext(FeatureContext);
  const { isLabelOpen } = FeatureState;

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
      callback: openLabel,
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

  return (
    <Fragment>
      <div className='relative grid grid-cols-1 gap-2'>
        <h3 className='text-xs font-semibold'>Add to card</h3>
        <ul className='space-y-2'>
          {FEATURES_BTN_DATA.map((item) => {
            return (
              <li key={item.id}>
                <DefaultBtn
                  bgColor='bg-gray-200 hover:bg-gray-300'
                  icon={item.icon}
                  iconColor='text-gray-600'
                  name={item.name}
                  fullWidth={true}
                  onClick={item.callback}
                />
              </li>
            );
          })}
        </ul>
        {isLabelOpen && (
          <LabelsModal labelsBtn={labelsBtn} labelsDisplay={[]} />
        )}
      </div>
      <div className='grid grid-cols-1 gap-2'>
        <h3 className='text-xs font-semibold'>Action</h3>
        <ul className='space-y-2'>
          {ACTIONS_BTN_DATA.map((item) => {
            return (
              <li key={item.id}>
                <DefaultBtn
                  bgColor='bg-gray-200 hover:bg-gray-300'
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
    </Fragment>
  );
};
export default Features;
