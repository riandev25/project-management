import {
  faArrowUpRightDots,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { IAttachmentObject } from '../../../interfaces/attachment.interface';
import { useCreateAttachment } from '../../../lib/hooks/attachment/useCreateAttachment';
import { useGetAttachments } from '../../../lib/hooks/attachment/useGetAttachment';
import { filenameExist } from '../../../lib/utils/filenameExist';
import { FeatureDisplayHeader } from '../../../UI/Feature/FeatureDisplayHeader';
import Attachments from './Attachments';

const Attachment = () => {
  const { register, handleSubmit, reset } = useForm();

  // Local store

  const [fileError, setFileError] = useState<boolean>(false);
  const [fileEmpty, setFileEmpty] = useState<boolean>(false);

  // Data fetching

  const {
    mutateAsync,
    isLoading: isCreateLoading,
    isSuccess: isCreateSuccess,
  } = useCreateAttachment();
  const { data: attachmentData, isLoading, isSuccess } = useGetAttachments();

  // Event handler

  const handleSubmitHandler = async (data: FieldValues, e: any) => {
    e.preventDefault();
    try {
      const file = filenameExist(attachmentData, data);
      if (!file) {
        const res = await mutateAsync(data.image[0]);
        console.log(res);
      } else {
        setFileError(true);
      }
    } catch (err) {
      setFileEmpty(true);
    }
  };

  const handler = () => {};

  // Side effects

  useEffect(() => {
    if (isCreateSuccess) reset();
  }, [isCreateSuccess, reset]);

  useEffect(() => {
    let timeout: any;
    if (fileEmpty) {
      timeout = setTimeout(() => {
        setFileEmpty(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [fileEmpty]);

  useEffect(() => {
    let timeout: any;
    if (fileError) {
      timeout = setTimeout(() => {
        setFileError(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [fileError]);

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
        rightBtn={false}
        onClick={handler}
      />
      <Attachments attachment={attachmentData} />
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
        <section className='flex flex-row gap-2 items-center'>
          <button
            disabled={isCreateLoading}
            className={`bg-gray-200 w-fit flex flex-row justify-start items-center rounded-sm py-1 px-3 gap-2 text-base text-gray-700 ${
              !isCreateLoading && 'hover:bg-gray-300'
            }`}
            type='submit'
          >
            {isCreateLoading ? 'Uploading ...' : 'Upload'}
          </button>
          {fileError ? (
            <p className='flex flex-1 text-red-500'>
              Filename exists, please rename the file.
            </p>
          ) : fileEmpty ? (
            <p className='flex flex-1 text-red-500'>
              File is missing, please upload the file first.
            </p>
          ) : null}
        </section>
      </form>
    </div>
  );
};

export default Attachment;
