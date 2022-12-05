import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';
import { CardChildren, ILabels } from '../../interfaces/data';
import { useReducer } from 'react';
import labelReducer from '../../lib/context/LabelContext/labelReducer';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';

const CardChild = ({ childTitle, labels }: CardChildren) => {
  const { FeatureState, openFeatureModal } = useContext(FeatureContext);
  const isOpen = FeatureState.map((feature) => {
    if (feature.id === 'feature-modal') return feature.isOpen;
  });
  // const isOpen = filterFeature(FeatureState)

  const [labelState, dispatchLabel] = useReducer(labelReducer, labels);

  return (
    <Fragment>
      <LabelContext.Provider value={{ labelState, dispatchLabel }}>
        <div
          data-id='feature-modal'
          className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'
          onClick={openFeatureModal}
        >
          <div className='flex flex-col w-full gap-2 shadow-sm'>
            <ul className='grid grid-cols-5 gap-0.5'>
              {labelState.map(({ id, bgColorStrip, isChecked }: ILabels) => {
                return (
                  isChecked && (
                    <li key={id} className={`h-2 ${bgColorStrip} rounded-md`} />
                  )
                  // <li
                  //   key={id}
                  //   className={`h-2 ${bgColorStrip} rounded-md`}
                  // ></li>
                );
              })}
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
        {isOpen && (
          <Portal>
            <CardFeaturesModal />
          </Portal>
        )}
      </LabelContext.Provider>
    </Fragment>
  );
};

export default CardChild;
