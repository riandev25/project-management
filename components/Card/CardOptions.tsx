import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'zustand/shallow';
import { listStore } from '../../store/listStore';
import CardOptionsButton from '../../UI/Buttons/CardOptionsBtn';

interface IActions {
  name: string;
  action: () => void;
}

interface CardOptionProp {
  _id?: string;
  actions: IActions[];
  pos: string;
  exitHandler: (_id: string) => void;
}

const CardOptions = ({ _id, actions, pos, exitHandler }: CardOptionProp) => {
  const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    exitHandler(_id);
  };

  return (
    <div
      className={`${pos} z-20 absolute w-72 rounded-sm bg-white text-gray-600`}
    >
      <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button
          type='button'
          data-id={_id}
          className='absolute top-2 right-0 hover:text-gray-400'
          onClick={toggleHandler}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header>
      <section className='py-1'>
        {actions.map((item, i) => {
          return (
            <CardOptionsButton
              key={i}
              idCard={_id}
              operation={item.name}
              action={item.action}
            />
          );
        })}
      </section>
    </div>
  );
};
export default CardOptions;
