import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useCreateAttachment } from '../../../lib/hooks/attachment/useCreateAttachment';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';

const Attachment = () => {
  const { mutateAsync } = useCreateAttachment();
  const handler = () => {};

  const onChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    mutateAsync(file);
  };

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
      <section className='flex-col pl-9'>
        <input
          className='block w-full text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          id='file_input'
          type='file'
          onChange={onChangeHandler}
        />
        <p
          className='w-full mt-1 text-sm text-gray-500 dark:text-gray-300'
          id='file_input_help'
        >
          SVG, PNG, JPG or GIF. Smaller file is recommended when using/testing
          this feature to maximize the free storage.
        </p>
      </section>
    </div>
  );
};

export default Attachment;
