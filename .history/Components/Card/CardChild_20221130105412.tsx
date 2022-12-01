import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment } from 'react';
import { useFeatureContext } from '../../lib/hooks/useFeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';
import { CardChildren, ILabels } from '../../interfaces/data';
import { useReducer } from 'react';
import labelReducer from '../../lib/context/DataContext/labelReducer';
import { LabelContext } from '../../lib/hooks/useDataContext';

const CardChild = ({ childTitle, labels }: CardChildren) => {
  const { FeatureState, openFeature } = useContext(useFeatureContext);
  const { isFeatureOpen } = FeatureState;

  const [state, dispatch] = useReducer(labelReducer, labels);

  console.log(state);

  return (
    <Fragment>
      <LabelContext.Provider value={{ state, dispatch }}>
        <div
          className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'
          onClick={openFeature}
        >
          <div className='flex flex-col w-full gap-2 shadow-sm'>
            <ul className='grid grid-cols-5 gap-0.5'>
              {state.map(({ id, bgColorStrip }: ILabels) => {
                return (
                  <li
                    key={id}
                    className={`h-2 ${bgColorStrip} rounded-md`}
                  ></li>
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
          <Portal>
            <CardFeaturesModal labels={labels} />
          </Portal>
        )}
      </LabelContext.Provider>
    </Fragment>
  );
};

export default CardChild;
