// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { shallow } from 'zustand/shallow';
// import { listStore } from '../../store/listStore';
// import CardOptionsButton from '../../UI/Buttons/CardOptionsBtn';

// interface IActions {
//   name: string;
//   action: () => void;
// }

// interface CardOptionProp {
//   _id?: string;
//   actions: IActions[];
//   pos: string;
//   exitHandler: (_id: string) => void;
// }

// const CardOptions = ({ _id, actions, pos, exitHandler }: CardOptionProp) => {
//   const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const _id = String(event.currentTarget.dataset.id);
//     exitHandler(_id);
//   };

//   return (
//     <div
//       className={`${pos} z-20 absolute w-72 rounded-sm bg-white text-gray-600`}
//     >
//       <header className='relative py-2 mx-2 border-b text-center'>
//         <h2>List of Actions</h2>
//         <button
//           type='button'
//           data-id={_id}
//           className='absolute top-2 right-0 hover:text-gray-400'
//           onClick={toggleHandler}
//         >
//           <FontAwesomeIcon icon={faXmark} size='lg' />
//         </button>
//       </header>
//       <section className='py-1'>
//         {actions.map((item, i) => {
//           return (
//             <CardOptionsButton
//               key={i}
//               idCard={_id}
//               operation={item.name}
//               action={item.action}
//             />
//           );
//         })}
//       </section>
//     </div>
//   );
// };
// export default CardOptions;

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
      className={`${pos} z-20 top-0 left-0 absolute w-64 rounded-sm bg-transparent text-gray-600`}
    >
      <div>
        <form
          className='flex flex-col gap-2 text-gray-500'
          // onSubmit={onSubmit}
        >
          <textarea
            // value={addChild}
            // onChange={(event) => setAddChild(event.target.value)}
            role='textbox'
            className='h-24 py-2.5 px-2 bg-white'
          ></textarea>
          <div className='flex justify-between items-center'>
            <section className='flex flex-row justify-start items-center gap-2'>
              <button
                data-id={_id}
                type='submit'
                // disabled={isCreateCardLoading}
                className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
              >
                {/* {isCreateCardLoading ? (
              <TextWithSpinner text='Creating' />
            ) : (
              'Create'
            )} */}
                Create
              </button>
              <button
                type='button'
                data-id={_id}
                className='hover:text-gray-400'
                // onClick={toggleAddCardHandler}
              >
                <FontAwesomeIcon icon={faXmark} size='2x' />
              </button>
            </section>
          </div>
        </form>
        <section className='absolute top-0 right-0'>
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
      {/* <header className='relative py-2 mx-2 border-b text-center'>
        <h2>List of Actions</h2>
        <button
          type='button'
          data-id={_id}
          className='absolute top-2 right-0 hover:text-gray-400'
          onClick={toggleHandler}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </button>
      </header> */}
    </div>
  );
};
export default CardOptions;
