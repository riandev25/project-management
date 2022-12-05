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
import DefaultBtn from '../../UI/Buttons/DefaultBtn';
import LabelsModal from './Labels/LabelsModal';
import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import isOpen from '../../lib/helper/features/isOpen';

const Features = () => {
  const { FeatureState, openFeatureModal } = useContext(FeatureContext);
  const isLabelOpen = FeatureState[2].isOpen;

  // isOpen(FeatureState)
  const FEATURES_BTN_DATA = [
    {
      id: 'members-option',
      icon: faUser,
      name: 'Members',
      isOpen: false,
    },
    {
      id: 'labels-option',
      icon: faTag,
      name: 'Labels',
      isOpen: false,
    },
    {
      id: 'checklist-option',
      icon: faListCheck,
      name: 'Checklist',
      isOpen: false,
    },
    {
      id: 'dates-option',
      icon: faClock,
      name: 'Dates',
      isOpen: false,
    },
    {
      id: 'attachment-option',
      icon: faPaperclip,
      name: 'Attachment',
      isOpen: false,
    },
    {
      id: 'cover-option',
      icon: faImage,
      name: 'Cover',
      isOpen: false,
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
                  id={item.id}
                  bgColor='bg-gray-200 hover:bg-gray-300'
                  icon={item.icon}
                  iconColor='text-gray-600'
                  name={item.name}
                  fullWidth={true}
                  onClick={openFeatureModal}
                  isDisabled={false}
                />
              </li>
            );
          })}
        </ul>

        {isLabelOpen && <LabelsModal />}
      </div>
      <div className='grid grid-cols-1 gap-2'>
        <h3 className='text-xs font-semibold'>Action</h3>
        <ul className='space-y-2'>
          {ACTIONS_BTN_DATA.map((item) => {
            return (
              <li key={item.id}>
                <DefaultBtn
                  id={item.id}
                  bgColor='bg-gray-200 hover:bg-gray-300'
                  icon={item.icon}
                  iconColor='text-gray-600'
                  name={item.name}
                  fullWidth={true}
                  isDisabled={false}
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
