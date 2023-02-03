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

const Card = ({ cards, listName, _id }: IBoardData) => {
  const {
    CardState,
    openCardChildForm,
    closeCardChildForm,
    openCardOption,
    closeCardOption,
  } = useContext(CardContext);
  // const { isFormOpen, isOptionOpen } = CardState;

  const router = useRouter();
  const path = router.asPath.slice(1, 2);

  const { listState, toggleCardOption, toggleAddCard } = listStore(
    (state) => ({
      listState: state.listState,
      toggleAddCard: state.toggleAddCard,
      toggleCardOption: state.toggleCardOption,
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

  // Handlers

  const toggleAddCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleAddCard(_id);
  };

  return (
    <div className='relative flex flex-col w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-sm text-sm text-gray-700'>
      <header className='flex flex-row justify-between items-center py-2.5 px-1.5'>
        <h2 className='font-semibold'>{listName}</h2>
        <button
          type='button'
          className='h-full px-1.5 hover:bg-gray-400'
          onClick={openCardOption}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </header>

      <ul className='flex flex-col w-full gap-[2px]'>
        {cards.map(({ cardName, _id: idCard }, i) => {
          return (
            <li key={i}>
              <CardChild _id={idCard} cardName={cardName} />
            </li>
          );
        })}
      </ul>
      {!isAddCardOpen && (
        <section className='flex flex-row gap-2 mt-2.5 text-gray-500'>
          <button
            data-id={_id}
            type='button'
            className='w-full text-start rounded-sm py-1.5 px-2 space-x-2 hover:bg-gray-400'
            onClick={toggleAddCardHandler}
          >
            <FontAwesomeIcon icon={faAdd} />
            <span>Add a card</span>
          </button>
          <button
            type='button'
            className='py-1.5 px-2 rounded-sm hover:bg-gray-400'
          >
            <FontAwesomeIcon icon={faFile} />
          </button>
        </section>
      )}
      {isAddCardOpen && <CardAddChildForm _id={_id} />}
      {isOptionOpen && <CardOptions closeCardOption={closeCardOption} />}
    </div>
  );
};

export default Card;
