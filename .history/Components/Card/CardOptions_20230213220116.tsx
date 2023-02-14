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
import { useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useOnClickOutside } from '../../lib/utils/useOnClickOutside';
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
  const [delayedBtn, setDelayedBtn] = useState<boolean>(false);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);

  // const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const _id = String(event.currentTarget.dataset.id);
  //   exitHandler(_id);
  // };

  useOnClickOutside(ref, () => exitHandler(String(_id)));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedBtn(true);
    }, 500);
    return clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className={`${pos} z-20 -top-2 -left-2 absolute w-[260px] rounded-sm bg-transparent text-gray-600`}
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
            className='h-40 rounded-lg py-2.5 px-2 bg-white'
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
            </section>
          </div>
        </form>
        <section
          className={`absolute top-0 -right-24 translate-x-2 bg-transparent transition-opacity ${
            delayedBtn
              ? 'grid grid-cols-1 translate-x-2'
              : '-translate-x-1 hidden'
          } `}
        >
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
