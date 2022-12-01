import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import CardChild from './CardChild';
import CardAddChildForm from './CardAddChildForm';
import { useContext } from 'react';
import { CardContext } from '../../lib/context/CardContext/CardContext';
import CardOptions from './CardOptions';
import { ProjectData } from '../../interfaces/data';

const Card = ({ cardTitle, cardChildren }: ProjectData) => {
  const {
    CardState,
    openCardChildForm,
    closeCardChildForm,
    openCardOption,
    closeCardOption,
  } = useContext(CardContext);
  const { isFormOpen, isOptionOpen } = CardState;

  // const BASIC_OPTIONS = [
  //   'Add card...',
  //   'Copy list...',
  //   'Move list...',
  //   'Watch',
  // ];

  return (
    <div className='relative flex flex-col w-[17rem] bg-gray-300 px-1.5 pb-2 rounded-sm text-sm text-gray-700'>
      <header className='flex flex-row justify-between items-center py-2.5 px-1.5'>
        <h2 className='font-semibold'>{cardTitle}</h2>
        <button
          type='button'
          className='h-full px-1.5 hover:bg-gray-400'
          onClick={openCardOption}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </header>

      <ul className='flex flex-col w-full gap-[2px]'>
        {cardChildren.map(({ childTitle, labelsDisplay, labelsBtn }) => {
          return (
            <li key={childTitle}>
              <CardChild
                childTitle={childTitle}
                labelsDisplay={labelsDisplay}
                labelsBtn={labelsBtn}
              />
            </li>
          );
        })}
      </ul>
      {!isFormOpen && (
        <section className='flex flex-row gap-2 mt-2.5 text-gray-500'>
          <button
            data-id='child-form-btn'
            type='button'
            className='w-full text-start rounded-sm py-1.5 px-2 space-x-2 hover:bg-gray-400'
            onClick={openCardChildForm}
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
      {isFormOpen && (
        <CardAddChildForm closeCardChildForm={closeCardChildForm} />
      )}
      {isOptionOpen && <CardOptions closeCardOption={closeCardOption} />}
    </div>
  );
};

export default Card;
