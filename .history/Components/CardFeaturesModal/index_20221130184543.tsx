import Description from './Description';
import FeaturesHeader from './FeaturesHeader';
import Labels from './Labels';
import Features from './Features';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useReducer } from 'react';
import { useFeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import { CardChildren, LabelProp } from '../../interfaces/data';

const CardFeaturesModal = ({ labels }: CardChildren) => {
  const { closeFeature } = useContext(useFeatureContext);

  return (
    <div className='z-10 relative flex flex-col max-w-3xl py-6 px-5 gap-6 bg-gray-100 text-gray-600'>
      <FeaturesHeader />
      <div className='flex flex-row gap-2'>
        <section className='flex flex-col flex-1 gap-5'>
          <Labels labels={labels} />
          <Description />
        </section>
        <section className='flex flex-col gap-4 w-44'>
          <Features labels={labels} />
        </section>
        <button
          type='button'
          className='absolute top-1.5 right-1.5 rounded-full py-1.5 px-3 hover:bg-gray-100'
          onClick={closeFeature}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' className='text-gray-500' />
        </button>
      </div>
    </div>
  );
};
export default CardFeaturesModal;