import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useCreateAttachment } from '../../../lib/hooks/attachment/useCreateAttachment';
import { useGetAttachments } from '../../../lib/hooks/attachment/useGetAttachment';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';

const Attachment = () => {
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState<File | null>(null);

  const { mutateAsync, isLoading: isCreateLoading } = useCreateAttachment();
  const { data, isLoading, isSuccess } = useGetAttachments();

  const submitHandler = async () => {
    // if (file) await mutateAsync(file);
  };

  // const onChangeHandler = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   console.log(event.target.files);
  //   setFile(event.target.files?.[0] || null);
  // };

  const handleSubmitHandler = async (data: FieldValues, e: any) => {
    e.preventDefault();
    console.log(data);
    await mutateAsync(data.image[0]);
  };

  if (isLoading) return <p></p>;
  if (!isSuccess && !data) return <p></p>;

  console.log(data);

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id='123'
        icon={faPaperclip}
        title='Attachments'
        btnTitle={isCreateLoading ? 'Uploading...' : 'Upload'}
        rightBtn={true}
        onClick={submitHandler}
      />
      <form
        className='flex flex-col gap-1 pl-9'
        onSubmit={handleSubmit(handleSubmitHandler)}
      >
        <input
          className='block w-full text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          id='file_input'
          type='file'
          {...register('image')}
        />
        <p
          className='w-full mt-1 text-sm text-gray-500 dark:text-gray-300'
          id='file_input_help'
        >
          SVG, PNG, JPG or GIF. Smaller file is recommended when using/testing
          this feature to maximize the free storage.
        </p>
        <button
          className='bg-gray-200 flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-sm text-gray-700 hover:bg-gray-300'
          type='submit'
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Attachment;
