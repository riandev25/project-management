import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useUpdateList } from '../../lib/hooks/list/useUpdateList';
import { listStore } from '../../store/listStore';

interface ICardChildForm {
  _id?: string;
}

const CardAddChildForm = ({ _id }: ICardChildForm) => {
  const [addChild, setAddChild] = useState('');

  const { toggleAddCard } = listStore(
    (state) => ({
      listState: state.listState,
      toggleAddCard: state.toggleAddCard,
      toggleCardOption: state.toggleCardOption,
    }),
    shallow
  );

  // List data fetching

  const {mutateAsync: mutateUpdateList} = useUpdateList()

  // Handlers

  const toggleAddCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    mutateUpdateList({cardName: addChild})
    toggleAddCard(_id);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const _id = String(event.currentTarget.dataset.id);
    toggleAddCard(_id);
  };

  return (
    <form
      className='flex flex-col w-full mt-2.5 gap-2 text-gray-500'
      onSubmit={onSubmit}
    >
      <textarea
        value={addChild}
        onChange={(event) => setAddChild(event.target.value)}
        role='textbox'
        className='h-24 py-2.5 px-2 bg-white'
      ></textarea>
      <div className='flex justify-between items-center'>
        <section className='flex flex-row justify-start items-center gap-2'>
          <button
            data-id={_id}
            type='submit'
            className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
          >
            Add card
          </button>
          <button
            type='button'
            data-id={_id}
            className='hover:text-gray-400'
            onClick={toggleAddCardHandler}
          >
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </button>
        </section>
        <button type='button'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </form>
  );
};
export default CardAddChildForm;
