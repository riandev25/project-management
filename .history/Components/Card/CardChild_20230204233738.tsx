import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment, MouseEventHandler } from 'react';
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
import useFeatureState from '../../lib/hooks/features/useFeatureState';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IBoardCardData, IBoardData } from '../../interfaces/board.interface';
import { boardStore } from '../../store/boardStore';
import React from 'react';
import { setLocalStorage } from '../../lib/utils/localStorage';
import { shallow } from 'zustand/shallow';

const CardChild = ({ cardName, _id: idCard }: IBoardCardData) => {
  const { dispatchFeature } = useContext(FeatureContext);
  // const isFeatureOpen = featureState[0].isOpen;

  const { isFeatureOpen } = useFeatureState();

  // const [labelState, dispatchLabel] = useReducer(labelReducer, labels);
  // const [checklistData, dispatchChecklist] = useReducer(
  //   checklistReducer,
  //   checklist
  // );

  const onOpenFeature = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const id = event.currentTarget.dataset.id;
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: id },
    });
  };

  const { modalState, toggleModal } = boardStore(
    (state) => ({
      modalState: state.modalState,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const openFeatureModal = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleModal(_id);
    setLocalStorage('idCard', String(idCard));
  };

  // let modal

  let filteredModal = modalState.find((modal) => modal._id === idCard);
  // if (filteredModal !== undefined) modal = filteredModal

  return (
    <Fragment>
      <div
        // data-id={idCard}
        className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'
        // onClick={openFeatureModal}
        // onClick={onOpenFeature}
      >
        <div
          data-id={idCard}
          onClick={openFeatureModal}
          className='flex flex-col w-full gap-2 shadow-sm'
        >
          {/* <ul className='grid grid-cols-5 gap-0.5'>
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
              </ul> */}
          <section className='text-gray-700'>{cardName}</section>
          <section className='text-gray-700'>
            <FontAwesomeIcon icon={faPaperclip} size='sm' />
          </section>
        </div>
        <button type='button' className='p-2 hover:bg-white'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      {filteredModal?.isOpen && (
        <Portal portalId='#myportal'>
          <CardFeaturesModal _id={idCard} />
        </Portal>
      )}
    </Fragment>
  );
};

export default CardChild;
