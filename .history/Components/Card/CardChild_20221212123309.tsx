import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment } from 'react';
// import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';
import { CardChildren, ILabels } from '../../interfaces/data';
import { useReducer } from 'react';
import labelReducer from '../../lib/context/LabelContext/labelReducer';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';
import { FeatureContext } from '../../lib/context/FeatureContext/featureProvider';
import checklistReducer from '../../lib/context/ChecklistContext/checklistReducer';
import { ChecklistContext } from '../../lib/context/ChecklistContext/ChecklistContext';

const CardChild = ({ childTitle, labels, checklist }: CardChildren) => {
  const { featureState, dispatchFeature } = useContext(FeatureContext);
  const isFeatureOpen = featureState[7].isOpen;

  const [labelState, dispatchLabel] = useReducer(labelReducer, labels);
  const [checklistData, dispatchChecklist] = useReducer(
    checklistReducer,
    checklist
  );

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
    <Fragment>
      <LabelContext.Provider value={{ labelState, dispatchLabel }}>
        <ChecklistContext.Provider value={{ checklistData, dispatchChecklist }}>
          <div
            data-id='feature-modal'
            className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'
            onClick={onOpenFeature}
          >
            <div className='flex flex-col w-full gap-2 shadow-sm'>
              <ul className='grid grid-cols-5 gap-0.5'>
                {labelState.map(({ id, bgColorStrip, isChecked }: ILabels) => {
                  return (
                    isChecked && (
                      <li
                        key={id}
                        className={`h-2 ${bgColorStrip} rounded-md`}
                      />
                    )
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
          {isFeatureOpen && (
            <Portal portalId='#myportal'>
              <CardFeaturesModal />
            </Portal>
          )}
        </ChecklistContext.Provider>
      </LabelContext.Provider>
    </Fragment>
  );
};

export default CardChild;
