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
import CardOptions from './CardOptions';

const CardChild = ({ cardName, _id: idCard }: IBoardCardData) => {
  const ACTIONS = [
    'Add card...',
    'Copy list...',
    'Move list...',
    'Watch',
    'Sort by...',
    'Archive this list',
  ];

  // Board global store

  const { modalState, toggleModal, toggleCardOption } = boardStore(
    (state) => ({
      modalState: state.modalState,
      toggleModal: state.toggleModal,
      toggleCardOption: state.toggleCardOption,
    }),
    shallow
  );

  // Filter modalState

  const isCardOptionOpen = modalState.find(
    (modalState) => modalState._id === idCard
  )?.isCardOptionOpen;

  // const CardOption =

  // Event handlers

  const openFeatureModal = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleModal(_id);
    setLocalStorage('idCard', String(idCard));
  };

  const openCardOptionsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    console.log(_id);
    toggleCardOption(_id);
  };

  // let modal

  let filteredModal = modalState.find((modal) => modal._id === idCard);
  // if (filteredModal !== undefined) modal = filteredModal

  return (
    <Fragment>
      <div className='flex flex-row py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'>
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
        <div className='relative flex items-center'>
          <button
            type='button'
            data-id={idCard}
            className='px-1 hover:bg-white'
            onClick={openCardOptionsModal}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          {isCardOptionOpen ? (
            <CardOptions _id={idCard} actions={ACTIONS} pos='top-0 left-6' />
          ) : null}
        </div>
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
