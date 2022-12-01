import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment } from 'react';
import { useFeatureContext } from '../../lib/hooks/useFeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';
import { CardChildren, Labels } from '../../interfaces/data';

const CardChild = ({ childTitle, labels }: CardChildren) => {
  const { FeatureState, openFeature } = useContext(useFeatureContext);
  const { isFeatureOpen } = FeatureState;
  return (
    <Fragment>
      <div
        className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'
        onClick={openFeature}
      >
        <div className='flex flex-col w-full gap-2 shadow-sm'>
          <ul className='grid grid-cols-5 gap-0.5'>
            {labels.map(({ id, bgColorStrip }: Labels) => {
              return (
                <li key={id} className={`h-2 ${bgColorStrip} rounded-md`}></li>
              );
            })}
            <li className={`h-2 bg-green-600 rounded-md`}></li>
          </ul>
          <section className='text-gray-700'>{childTitle}</section>
          <section className='text-gray-700'>
            <FontAwesomeIcon icon={faPaperclip} size='sm' />
          </section>
        </div>
        <button type='button'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      {isFeatureOpen && (
        <Portal>
          <CardFeaturesModal labels={labels} />
        </Portal>
      )}
    </Fragment>
  );
};

export default CardChild;
