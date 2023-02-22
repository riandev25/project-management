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
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useUpdateCard } from '../../lib/hooks/list/useUpdateCard';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';
import { useOnClickOutside } from '../../lib/utils/useOnClickOutside';
import { listStore } from '../../store/listStore';
import CardOptionsButton from '../../UI/Buttons/CardOptionsBtn';
import TextWithSpinner from '../../UI/Loading/TextWithSpinner';

interface IActions {
  name: string;
  action: () => void;
}

interface CardOptionProp {
  _id?: string;
  idList?: string;
  cardName?: string;
  actions: IActions[];
  pos: string;
  exitHandler: (_id: string) => void;
}

const CardOptions = ({
  _id,
  idList,
  cardName,
  actions,
  pos,
  exitHandler,
}: CardOptionProp) => {
  // Local state
  const [updateCardName, setUpdateCardName] = useState<string>(
    String(cardName)
  );
  const [delayedBtn, setDelayedBtn] = useState<boolean>(false);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);
  // const ref = useRef<HTMLFormElement>(null);

  // const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const _id = String(event.currentTarget.dataset.id);
  //   exitHandler(_id);
  // };

  // Update cardname
  const {
    mutateAsync: mutateUpdateCard,
    isLoading: isUpdateCardLoading,
    isSuccess: isSucessUpdateCard,
  } = useUpdateCard();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateUpdateCard({ idList, _id, cardName: updateCardName });
  };

  useOnClickOutside(ref, () => {
    setDelayedBtn(false);
    exitHandler(String(_id));
  });

  useEffect(() => {
    // const timer = setTimeout(() => {
    setDelayedBtn(true);
    // }, 500);
    // return clearTimeout(timer);
  }, [delayedBtn]);

  useEffect(() => {
    if (isSucessUpdateCard) exitHandler(String(_id));
  }, [_id, exitHandler, isSucessUpdateCard]);

  return (
    <div
      ref={ref}
      className={`${pos} z-20 -top-2 -left-2 absolute w-full xs:w-[260px] rounded-sm bg-transparent text-gray-600`}
    >
      <div className='flex flex-col-reverse gap-2 xs:gap-0 xs:flex-row'>
        <form
          className='flex flex-col w-full gap-2 text-gray-500'
          onSubmit={onSubmitHandler}
        >
          <textarea
            value={capitalizeFirstLetter(updateCardName)}
            onChange={(event) => setUpdateCardName(event.target.value)}
            role='textbox'
            className='h-40 rounded-lg py-2.5 px-2 bg-white'
          ></textarea>
          <div className='flex justify-between items-center'>
            <section className='flex flex-row justify-start items-center gap-2'>
              <button
                data-id={_id}
                type='submit'
                disabled={isUpdateCardLoading}
                className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
              >
                {isUpdateCardLoading ? (
                  <TextWithSpinner text='Updating' />
                ) : (
                  'Update'
                )}
              </button>
            </section>
          </div>
        </form>
        {delayedBtn && (
          <section
            className={`relativexs:absolute top-0 -right-24 bg-transparent transition delay-1000 w-full grid-rows-1 xs:grid xs:grid-cols-1 xs:translate-x-2`}
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
        )}
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

    // <form
    //   ref={ref}
    //   className={`${pos} z-20 -top-2 -left-2 absolute w-[260px] rounded-sm bg-transparent text-gray-600`}
    //   // className='flex flex-col gap-2 text-gray-500'
    //   // onSubmit={onSubmit}
    // >
    //   <textarea
    //     // value={addChild}
    //     // onChange={(event) => setAddChild(event.target.value)}
    //     role='textbox'
    //     className='w-full h-40 rounded-lg py-2.5 px-2 bg-white'
    //   ></textarea>
    //   <div className='flex justify-between items-center'>
    //     <section className='flex flex-row justify-start items-center gap-2'>
    //       <button
    //         data-id={_id}
    //         type='submit'
    //         // disabled={isCreateCardLoading}
    //         className='bg-blue-600 py-1.5 px-2 rounded-sm text-white hover:bg-blue-700'
    //       >
    //         {/* {isCreateCardLoading ? (
    //           <TextWithSpinner text='Creating' />
    //         ) : (
    //           'Create'
    //         )} */}
    //         Update
    //       </button>
    //     </section>
    //   </div>
    //   {delayedBtn && (
    //     <section
    //       className={`absolute top-0 -right-24 bg-transparent transition delay-1000 w-auto grid grid-cols-1 translate-x-2`}
    //       // className={`absolute top-0 -right-24 bg-transparent w-auto grid grid-cols-1 transition-all duration-200 translate-x-4 ease-in-out delay-2000`}
    //       // className={`absolute top-0 -right-24 bg-transparent transition delay-1000 w-auto grid grid-cols-1 translate-x-4 opacity-0 duration-200 traansition-delay-200 opacity-1`}
    //     >
    //       {actions.map((item, i) => {
    //         return (
    //           <CardOptionsButton
    //             key={i}
    //             idCard={_id}
    //             operation={item.name}
    //             action={item.action}
    //           />
    //         );
    //       })}
    //     </section>
    //   )}
    // </form>
  );
};
export default CardOptions;