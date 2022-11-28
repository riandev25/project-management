import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { useFeatureContext } from '../../lib/hooks/useFeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';

const CardChild = () => {
  const { FeatureState, openFeature } = useContext(useFeatureContext);
  // const { isFeatureOpen } = FeatureState;
  return (
    <div
      className='flex flex-row py-2 px-2 rounded-sm bg-white hover:bg-gray-100'
      onClick={openFeature}
    >
      <div className='flex flex-col w-full gap-2 shadow-sm'>
        <section className='grid grid-cols-5 gap-0.5'>
          <span className='h-2 bg-green-600 rounded-sm'></span>
        </section>
        <section className='text-gray-700'>Product Owner</section>
        <section className='text-gray-700'>
          <FontAwesomeIcon icon={faPaperclip} size='sm' />
        </section>
      </div>
      <button type='button'>
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <Portal>
        <CardFeaturesModal />
      </Portal>
    </div>
  );
};

export default CardChild;
