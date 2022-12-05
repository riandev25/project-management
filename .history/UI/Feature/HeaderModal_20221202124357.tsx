import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';

type IHeaderModal = {
  title: string;
  idLeft?: string;
  idX: string;
  leftBtn: boolean;
};

const HeaderModal = ({ title, idLeft, idX, leftBtn }: IHeaderModal) => {
  const { openFeatureModal } = useContext(FeatureContext);
  return (
    <header className='relative flex justify-center items-center pt-1.5'>
      {leftBtn && (
        <button
          data-id={idLeft}
          type='button'
          className='absolute top-1 left-3'
        >
          <FontAwesomeIcon icon={faChevronLeft} className='text-gray-500' />
        </button>
      )}
      <h3 className='text-sm'>{title}</h3>
      <button
        data-id={idX}
        type='button'
        className='absolute top-1 right-3'
        onClick={openFeatureModal}
      >
        <FontAwesomeIcon icon={faXmark} className='text-gray-500' />
      </button>
    </header>
  );
};
export default HeaderModal;
