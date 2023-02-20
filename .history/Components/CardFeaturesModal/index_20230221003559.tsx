import Description from './Description';
import FeaturesHeader from './Features/FeaturesHeader';
import Labels from './Labels';
import Features from './Features';
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChecklistArray from './Checklist';
import { IBoardCardData } from '../../interfaces/board.interface';
import { boardStore } from '../../store/boardStore';
import { removeLocalStorage } from '../../lib/utils/localStorage';
import { shallow } from 'zustand/shallow';
import Attachment from './Attachments';
import { useState } from 'react';

const CardFeaturesModal = ({ _id, cardName, listName }: IBoardCardData) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const { toggleModal } = boardStore(
    (state) => ({
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const closeFeatureModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    removeLocalStorage('idCard');
    toggleModal(_id);
  };

  const toggleSideBarHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div
      id='cardFeaturesPortal'
      className='z-10 relative flex flex-col min-w-screen xs:max-w-3xl py-4 px-1 sm:py-7 sm:px-5 gap-6 bg-gray-100 text-gray-700'
    >
      <FeaturesHeader cardName={cardName} listName={listName} />
      <div className='flex flex-row gap-6'>
        <section className='flex flex-col flex-1 gap-8'>
          <Labels />
          <Description />
          <Attachment />
          <ChecklistArray />
        </section>
        <section
          className={`${
            !toggleSidebar && '-translate-x-full'
          } transition sm:translate-x-0 fixed bg-white min-h-screen sm:h-auto sm:bg-transparent shadow-2xl sm:shadow-none top-0 left-0 sm:relative flex flex-col gap-4 w-44`}
        >
          <div className='relative min-h-screen sm:h-auto p-4 sm:p-0'>
            <Features _id={_id} />
            <button
              type='button'
              className='absolute top-1/2 right-0 translate-x-full flex sm:hidden w-8 h-10 rounded-r-full bg-gray-800 text-gray-200'
              onClick={toggleSideBarHandler}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size='lg'
                className='text-gray-300 translate-x-3 translate-y-3'
              />
            </button>
          </div>
        </section>
        <button
          data-id={_id}
          type='button'
          className='absolute top-1.5 right-1.5 rounded-full py-1.5 px-3 hover:bg-gray-800'
          onClick={closeFeatureModal}
        >
          <FontAwesomeIcon icon={faXmark} size='lg' className='text-gray-500' />
        </button>
      </div>
    </div>
  );
};
export default CardFeaturesModal;
