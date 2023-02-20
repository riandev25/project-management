import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, Fragment, MouseEventHandler, useEffect } from 'react';
// import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import CardFeaturesModal from '../CardFeaturesModal';
import Portal from '../../lib/portal/Portal';
import { IBoardCardData, IBoardData } from '../../interfaces/board.interface';
import { boardStore } from '../../store/boardStore';
import React from 'react';
import { setLocalStorage } from '../../lib/utils/localStorage';
import { shallow } from 'zustand/shallow';
import CardOptions from './CardOptions';
import { useUpdateCard } from '../../lib/hooks/list/useUpdateCard';
import { useGetLists } from '../../lib/hooks/list/useGetLists';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteCard } from '../../lib/hooks/list/useDeleteCard';
import { cardIdStore } from '../../store/cardStore';

const CardChild = ({
  cardName,
  _id: idCard,
  idList,
  listName,
}: IBoardCardData) => {
  // const ACTIONS = [
  //   'Add card...',
  //   'Copy list...',
  //   'Move list...',
  //   'Watch',
  //   'Sort by...',
  //   'Archive this list',
  // ];

  // Board global store

  const { modalState, toggleModal, toggleCardOption } = boardStore(
    (state) => ({
      modalState: state.modalState,
      toggleModal: state.toggleModal,
      toggleCardOption: state.toggleCardOption,
    }),
    shallow
  );

  const { updateIdCard } = cardIdStore(
    (state) => ({
      updateIdCard: state.updateIdCard,
    }),
    shallow
  );

  // Filter modalState

  const isCardOptionOpen = modalState.find(
    (modalState) => modalState._id === idCard
  )?.isCardOptionOpen;

  // Data fetching
  const { refetch } = useGetLists();

  const {
    mutateAsync: mutateDeleteCard,
    isSuccess: isDeleteSuccess,
    isLoading: isDeleteLoading,
  } = useDeleteCard();

  // Event handlers
  const openFeatureModal = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);

    console.log('clicked');
    // New
    updateIdCard(idCard);

    toggleModal(String(idCard));
    setLocalStorage('idCard', String(idCard));
  };

  const openCardOptionsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    console.log(_id);
    toggleCardOption(_id);
  };

  const updateDeleteCardHandler = async () => {
    await mutateDeleteCard({ idList, _id: idCard });
  };

  // let modal

  let filteredModal = modalState.find((modal) => modal._id === idCard);
  // if (filteredModal !== undefined) modal = filteredModal

  const ACTIONS = [
    {
      name: isDeleteLoading ? 'Deleting...' : 'Delete card',
      action: updateDeleteCardHandler,
    },
  ];

  // useEffect(() => {
  //   if (isOneCardOptionOpen)
  // })

  useEffect(() => {
    if (isDeleteSuccess && !isDeleteLoading) {
      toggleCardOption(String(idCard));
    }
  }, [idCard, isDeleteLoading, isDeleteSuccess, toggleCardOption]);

  return (
    <Fragment>
      <div className='relative flex flex-row w-full group py-2 px-2 rounded-sm bg-white cursor-pointer hover:bg-gray-100'>
        <div
          // disabled={isCardOptionOpen}
          data-id={idCard}
          // onClick={openFeatureModal}
          className='relative flex flex-start w-full gap-2 py-2 shadow-sm'
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
          <button
            className='text-gray-700 hover:underline'
            onClick={openFeatureModal}
          >
            {cardName}
          </button>
          {isCardOptionOpen ? (
            <CardOptions
              _id={idCard}
              idList={idList}
              cardName={cardName}
              actions={ACTIONS}
              pos=''
              exitHandler={toggleCardOption}
            />
          ) : null}
          {/* <section className='text-gray-700'>
            <FontAwesomeIcon icon={faPaperclip} size='sm' />
          </section> */}
        </div>
        <div className='aboslute top-2 right-1 flex items-center'>
          <button
            type='button'
            data-id={idCard}
            title='option'
            className={`px-1 ${
              isCardOptionOpen ? '' : 'hidden'
            } text-white group-hover:flex bg-gray-400 hover:bg-gray-500`}
            onClick={openCardOptionsModal}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          {/* {isCardOptionOpen ? (
            <CardOptions
              _id={idCard}
              actions={ACTIONS}
              pos='top-0 left-6'
              exitHandler={toggleCardOption}
            />
          ) : null} */}
        </div>
      </div>
      {filteredModal?.isOpen && (
        <Portal portalId='#myportal'>
          <CardFeaturesModal
            _id={idCard}
            cardName={cardName}
            listName={listName}
          />
        </Portal>
      )}
    </Fragment>
  );
};

export default CardChild;
