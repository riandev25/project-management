import { Fragment } from 'react';
import { faCopy, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faShare } from '@fortawesome/free-solid-svg-icons';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { featureStore } from '../../../store/featureStore';
import FeatureModals from './FeatureModals';

const Features = () => {
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
        <button
          type='button'
          className='w-8 h-8 rounded-r-full bg-red-2000'
        >
          a
        </button>
      </div>
    </Fragment>
  );
};
export default Features;
