import Description from './Description';
import FeaturesHeader from './FeaturesHeader';
import Labels from './Labels';
import Features from './Features';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/featureProvider';

const CardFeaturesModal = () => {
  const { dispatchFeature } = useContext(FeatureContext);

  const onOpenFeature = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const id = event.currentTarget.dataset.id;
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: id },
    });
  };

  return (
    <div className='z-10 relative flex flex-col max-w-3xl py-6 px-5 gap-6 bg-gray-100 text-gray-600'>
      <FeaturesHeader />
      <div className='flex flex-row gap-2'>
        <section className='flex flex-col flex-1 gap-5'>
          <Labels />
          <Description />
        </section>
        <section className='flex flex-col gap-4 w-44'>
          <Features />
        </section>
        <button
          data-id='feature-modal'
          type='button'
          className='absolute top-1.5 right-1.5 rounded-full py-1.5 px-3 hover:bg-gray-100'
          // onClick={openFeatureModal}
          onClick={onOpenFeature}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' className='text-gray-500' />
        </button>
      </div>
    </div>
  );
};
export default CardFeaturesModal;
// function dispatchFeature(arg0: {
//   type: string;
//   payload: { id: string | undefined };
// }) {
//   throw new Error('Function not implemented.');
// }
