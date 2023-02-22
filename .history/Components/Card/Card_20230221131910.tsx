import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import CardAddChildForm from './CardAddChildForm';
import { useContext, useEffect } from 'react';
import { CardContext } from '../../lib/context/CardContext/CardContext';
import CardOptions from './CardOptions';
import { ProjectData } from '../../interfaces/data';
import { useRouter } from 'next/router';
import { IBoardData } from '../../interfaces/board.interface';
import { shallow } from 'zustand/shallow';
import { listStore } from '../../store/listStore';
import { setLocalStorage } from '../../lib/utils/localStorage';
import { boardStore } from '../../store/boardStore';
import { useDeleteList } from '../../lib/hooks/list/useDeleteList';
import { useGetLists } from '../../lib/hooks/list/useGetLists';
import { listIdStore } from '../../store/cardStore';
import { useUpdateCard } from '../../lib/hooks/list/useUpdateCard';
import ListOptions from './ListOptions';

const Card = ({ cards, listName, _id }: IBoardData) => {
  // const ACTIONS = [
  //   'Add card...',
  //   'Copy list...',
  //   'Move list...',
  //   'Watch',
  //   'Sort by...',
  //   'Archive this list',
  // ];

  const styles = {
    '@media (min-width: 380px)': {
      width: 'calc(100vw - 16px)',
    },
  };

  // Global store
  const { listState, toggleAddCard, toggleCardOption } = listStore(
    (state) => ({
      listState: state.listState,
      toggleAddCard: state.toggleAddCard,
      toggleCardOption: state.toggleCardOption,
    }),
    shallow
  );

  const { updateIdList } = listIdStore(
    (state) => ({
      updateIdList: state.updateIdList,
    }),
    shallow
  );

  // Get the boolean value if creating card or not
  const isAddCardOpen = listState.find(
    (listState) => listState._id === _id
  )?.isAddCardOpen;
  const isOptionOpen = listState.find(
    (listState) => listState._id === _id
  )?.isOptionOpen;

  // Lists data fetching

  const {
    mutateAsync: mutateDeleteList,
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
  } = useDeleteList();

  // Handlers
  const toggleAddCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleAddCard(_id);
    console.log(_id);
    // updateIdList(_id);
    // setLocalStorage('idList', _id);
  };

  const toggleCardOptionHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleCardOption(_id);
  };

  const deleteListHandler = async () => {
    await mutateDeleteList(String(_id));
  };

  // Actions
  const ACTIONS = [
    {
      name: isDeleteLoading ? 'Deleting list...' : 'Delete list',
      action: deleteListHandler,
    },
  ];

  useEffect(() => {
    if (isDeleteSuccess) {
      toggleCardOption(String(_id));
    }
  }, [_id, isDeleteSuccess, toggleCardOption]);

  return (
    <div className='relative flex flex-col flex-1 min-w-[calc(100vw-32px)] xs:w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-sm text-sm text-gray-700'>
      <header className='flex flex-row justify-between items-center py-2.5 px-1.5'>
        <h2 className='font-semibold'>{listName}</h2>
        <button
          type='button'
          data-id={_id}
          className='h-full px-1.5 hover:bg-white'
          onClick={toggleCardOptionHandler}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </header>

      <ul className='flex flex-col w-full gap-[2px]'>
        {cards.map(({ cardName, _id: idCard }, i) => {
          return (
            <li key={i}>
              <CardChild
                _id={idCard}
                cardName={cardName}
                idList={_id}
                listName={listName}
              />
            </li>
          );
        })}
      </ul>
      {!isAddCardOpen && (
        <section className='flex flex-row gap-2 mt-2.5 text-gray-500'>
          <button
            data-id={_id}
            type='button'
            className='group w-full text-start rounded-sm py-1.5 px-2 space-x-2 hover:bg-gray-400'
            onClick={toggleAddCardHandler}
          >
            <FontAwesomeIcon icon={faAdd} className='group-hover:text-white' />
            <span className='group-hover:text-white'>Add a card</span>
          </button>
        </section>
      )}
      {isAddCardOpen && <CardAddChildForm _id={_id} />}
      {isOptionOpen && (
        // <CardOptions
        //   _id={_id}
        //   actions={ACTIONS}
        //   pos='translate-x-[14.5rem] translate-y-8'
        //   exitHandler={toggleCardOption}
        // />
        <ListOptions
          _id={_id}
          actions={ACTIONS}
          pos='right-0 xs:translate-x-[9rem] translate-y-8'
          exitHandler={toggleCardOption}
        />
      )}
    </div>
  );
};

export default Card;
