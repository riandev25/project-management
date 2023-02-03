import { Fragment, useContext, useState } from 'react';
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
import LabelsModal from '../Labels/LabelsModal';
// import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import isOpen from '../../../lib/helper/features/isOpen';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import ChecklistModal from '../Checklist/ChecklistModal';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import { featureStore } from '../../../store/featureStore';
import FeatureModals from './FeatureModals';

const Features = () => {
  // const { FeatureState, openFeatureModal } = useContext(FeatureContext);
  // const { featureState, dispatchFeature } = useContext(FeatureContext);

  const { isLabelOpen, isChecklistOpen } = useFeatureState();

  // const isLabelOpen = featureState[1].isOpen;
  // const isChecklistOpen = featureState;

  // const onOpenFeature = (
  //   event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  // ) => {
  //   const id = event.currentTarget.dataset.id;
  //   console.log(id);
  //   dispatchFeature({
  //     type: 'TOGGLE_FEATURE',
  //     payload: { id: id },
  //   });
  // };

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

  const { featureState, toggleFeatureModal } = featureStore((state) => ({
    featureState: state.featureState,
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  // const toggleFeatureHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const _id = String(event.currentTarget.dataset.id);
  //   toggleFeatureModal(_id);
  // };

  return (
    <Fragment>
      <div id='Label' className='relative grid grid-cols-1 gap-2'>
        <h3 className='text-xs font-semibold'>Add to card</h3>
        <ul className='space-y-2'>
          {featureState.map((item) => {
            return (
              <li key={item._id}>
                <DefaultBtn
                  id={item._id}
                  bgColor='bg-gray-200 hover:bg-gray-300'
                  icon={item.icon}
                  iconColor='text-gray-600'
                  name={item.name}
                  fullWidth={true}
                  onClick={toggleFeatureModal}
                  isDisabled={false}
                />
              </li>
            );
          })}
        </ul>
        <FeatureModals featureState={featureState} />
        {/* {isLabelOpen && <LabelsModal />}
        {isChecklistOpen && <ChecklistModal />} */}
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
