import { FormEvent, useEffect, useRef, useState } from 'react';
import { useUpdateCard } from '../../lib/hooks/list/useUpdateCard';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';
import { useOnClickOutside } from '../../lib/utils/useOnClickOutside';
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
    setDelayedBtn(true);
  }, [delayedBtn]);

  useEffect(() => {
    if (isSucessUpdateCard) exitHandler(String(_id));
  }, [_id, exitHandler, isSucessUpdateCard]);

  return (
    <div
      ref={ref}
      className={`${pos} z-20 xs:-top-2 xs:-left-2 absolute w-full xs:w-[260px] rounded-sm bg-transparent text-gray-600`}
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
            className={`relative xs:absolute xs:top-0 xs:-right-24 bg-transparent transition delay-1000 w-fit grid-rows-1 xs:grid xs:grid-cols-1 xs:translate-x-2`}
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
    </div>
  );
};
export default CardOptions;
