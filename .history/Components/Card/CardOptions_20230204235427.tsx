import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'zustand/shallow';
import { listStore } from '../../store/listStore';
import CardOptionsButton from '../../UI/Buttons/CardOptionsBtn';

interface CardOptionProp {
  _id?: string;
  actions: string[]
}

const CardOptions = ({ _id, actions }: CardOptionProp) => {
  const { listState, toggleCardOption, toggleAddCard } = listStore(
    (state) => ({
      listState: state.listState,
      toggleAddCard: state.toggleAddCard,
      toggleCardOption: state.toggleCardOption,
    }),
    shallow
  );

  const toggleOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleCardOption(_id);
  };

  return (
    <div className='absolute w-72 rounded-sm bg-white text-gray-600 translate-x-[14.5rem] translate-y-8'>
      <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button
          type='button'
          data-id={_id}
          className='absolute top-2 right-0 hover:text-gray-500'
          onClick={toggleOptionHandler}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='py-1'>
        {actions.map((item) => {
          return <CardOptionsButton key={item} operation={item} />;
        })}
      </section>
    </div>
  );
};
export default CardOptions;
