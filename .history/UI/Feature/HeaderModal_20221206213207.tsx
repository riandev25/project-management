import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';

type IHeaderModal = {
  title: string;
  id?: string;
  idFeature?: string;
  leftBtn: boolean;
  [x: string]: any; // REVIEW !!! add back and exit btn later
};

const HeaderModal = ({
  title,
  id,
  idFeature,
  leftBtn,
  backBtnHandler,
  exitBtnHandler,
}: IHeaderModal) => {
  const { openFeatureModal } = useContext(FeatureContext);
  const { dispatchLabel } = useContext(LabelContext);

  const onBackHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    // dispatchLabel({
    //   type: 'LABEL_OPTION_TOGGLE',
    //   payload: id,
    // });
    backBtnHandler(id);
  };

  const onExitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    // dispatchLabel({
    //   type: 'LABEL_OPTION_TOGGLE',
    //   payload: id,
    // });
    exitBtnHandler(id);
  };

  return (
    <header className='relative flex justify-center items-center pt-1.5 w-full'>
      {leftBtn && (
        <button
          data-id={id}
          type='button'
          className='absolute top-0 left-0'
          onClick={onBackHandler}
        >
          <FontAwesomeIcon icon={faChevronLeft} className='text-gray-500' />
        </button>
      )}
      <h3 className='text-sm'>{title}</h3>
      <button
        data-id={idFeature}
        type='button'
        className='absolute top-0 right-0'
        onClick={openFeatureModal}
      >
        <FontAwesomeIcon icon={faXmark} className='text-gray-500' />
      </button>
    </header>
  );
};
export default HeaderModal;
