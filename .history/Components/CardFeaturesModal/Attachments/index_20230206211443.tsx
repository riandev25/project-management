import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';

const Attachment = () => {
  const handler = () => {};

  const onChangeHandler = () => {};

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id='123'
        icon={faPaperclip}
        title='Attachments'
        btnTitle='Add'
        rightBtn={true}
        onClick={handler}
      />
      <input
        type='file'
        className='bg-gray-200 flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-sm text-gray-700 hover:bg-gray-300'
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Attachment;
