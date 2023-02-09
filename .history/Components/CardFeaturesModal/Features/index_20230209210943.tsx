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
        <button className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
          Triangle button
          <span className='absolute inset-0 h-full w-0 flex items-center justify-center'>
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                clipPath='polygon(0% 50%, 50% 0%, 100% 50%)'
                d='M10 3.22L1 10.22V18h18v-7.78L10 3.22z'
              />
            </svg>
          </span>
        </button>
      </div>
    </Fragment>
  );
};
export default Features;
