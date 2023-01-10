import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { NoIconBtn } from '../../../UI/Buttons/Buttons';
import DescriptionEditor from './DescriptionEditor';

const Description = () => {
  const onClickHandler = () => {};

  return (
    <div className='flex flex-row gap-4 text-gray-600'>
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size='lg'
        className='translate-y-1'
      />
      <div className='flex flex-col gap-3 w-full max-w-[492px]'>
        <section className='flex flex-row gap-3 justify-start'>
          <span className='font-bold'>Description</span>
          <NoIconBtn id='edit-btn' title='Edit' onClick={onClickHandler} />
        </section>
        <DescriptionEditor />

        {/* <NoIconBtn /> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default Description;
