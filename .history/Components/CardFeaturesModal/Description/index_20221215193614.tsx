import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import DescriptionEditor from './DescriptionEditor';

const Description = () => {
  return (
    <div className='flex flex-row gap-4 text-gray-600'>
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size='lg'
        className='translate-y-1'
      />
      <div className='flex flex-col gap-3 w-full max-w-[492px]'>
        <span className='font-bold'>Description</span>
        <DescriptionEditor />
        {/* <NoIconBtn /> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default Description;
