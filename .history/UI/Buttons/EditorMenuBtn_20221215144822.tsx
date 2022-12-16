import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IEditorMenuBtn {
  icon1: IconProp;
  icon2: IconProp;
}

export const DualIconBtn = ({ icon1, icon2 }: IEditorMenuBtn) => {
  return (
    <button
      type='button'
      className='px-1.5 space-x-1 rounded-sm text-gray-800 hover:bg-gray-200'
    >
      <FontAwesomeIcon icon={icon1} size='sm' />
      <FontAwesomeIcon icon={icon2} size='2xs' />
    </button>
  );
};
