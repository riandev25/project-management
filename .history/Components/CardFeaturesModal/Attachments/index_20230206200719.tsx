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
      <input type='file' onChange={onChangeHandler} />
    </div>
  );
};

export default Attachment;
