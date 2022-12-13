import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
// import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';

type IHeaderModal = {
  title: string;
  id?: string;
  idFeature?: string | number;
  leftBtn: boolean;
  [x: string]: any; // REVIEW !!! add back and exit btn later
  // backBtnHandler({id: string, effect: string}): void;
  // exitBtnHandler({id: string, effect: string}): void
  // backBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void
  // exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void
};

const HeaderModal = ({
  title,
  id,
  idFeature,
  leftBtn,
  backBtnHandler,
  exitBtnHandler,
}: IHeaderModal) => {
  // const { openFeatureModal } = useContext(FeatureContext);;

  // const onBackHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = event.currentTarget.dataset.id;
  //   backBtnHandler(id);
  // };

  // const onExitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = String(event.currentTarget.dataset.id);
  //   const effect = String(event.currentTarget.dataset.effect);
  //   exitBtnHandler(id, effect);
  // };

  return (
    <header className='relative flex justify-center items-center py-1.5 w-full border-b border-gray-500'>
      {leftBtn && (
        <button
          data-id={id}
          type='button'
          className='absolute top-0 left-0'
          onClick={backBtnHandler}
        >
          <FontAwesomeIcon icon={faChevronLeft} className='text-gray-500' />
        </button>
      )}
      <h3 className='text-sm'>{title}</h3>
      <button
        data-id={id}
        data-effect={idFeature}
        type='button'
        className='absolute top-0 right-0'
        onClick={exitBtnHandler}
      >
        <FontAwesomeIcon icon={faXmark} className='text-gray-500' />
      </button>
    </header>
  );
};
export default HeaderModal;
