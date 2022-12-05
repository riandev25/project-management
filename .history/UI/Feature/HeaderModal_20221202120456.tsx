import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/FeatureContext';

type IHeaderModal = {
  title: string;
  idLeft: string;
  idX: string;
};

const HeaderModal = ({ title, idLeft, idX }: IHeaderModal) => {
  const { openFeatureModal } = useContext(FeatureContext);
  return (
    <div>
      <header className='flex justify-center items-center pt-1.5'>
        <button data-id={idLeft}>
          <FontAwesomeIcon icon={faChevronLeft} className='text-gray-500' />
        </button>
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
    </div>
  );
};
export default HeaderModal;
