import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { IAttachmentObject } from '../../../interfaces/attachment.interface';
import { useCreateAttachment } from '../../../lib/hooks/attachment/useCreateAttachment';
import { useGetAttachments } from '../../../lib/hooks/attachment/useGetAttachment';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';

const Attachment = () => {
  const { register, handleSubmit, reset } = useForm();

  const [file, setFile] = useState<File | null>(null);

  const {
    mutateAsync,
    isLoading: isCreateLoading,
    isSuccess: isCreateSuccess,
  } = useCreateAttachment();
  const { data: attachmentData, isLoading, isSuccess } = useGetAttachments();

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
    console.log(data.image[0].name);
    // attachmentData.find((attachment: IAttachmentObject) => attachment.name)
    const res = await mutateAsync(data.image[0]);
    console.log(res);
  };

  useEffect(() => {
    if (isCreateSuccess) reset();
  }, [isCreateSuccess, reset]);

  if (isLoading) return <p></p>;
  if (!isSuccess && !attachmentData) return <p></p>;

  console.log(attachmentData);

  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        id='123'
        icon={faPaperclip}
        title='Attachments'
        btnTitle={'Image'}
        rightBtn={true}
        onClick={submitHandler}
      />
      <section>{/* {data.} */}</section>
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
          disabled={isCreateLoading}
          className={`bg-gray-200 w-fit flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-base text-gray-700 ${
            !isCreateLoading && 'hover:bg-gray-300'
          }`}
          type='submit'
        >
          {isCreateLoading ? 'Uploading ...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default Attachment;
