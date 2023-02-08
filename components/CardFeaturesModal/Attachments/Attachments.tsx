import {
  faArrowUpRightDots,
  faArrowUpRightFromSquare,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IAttachment } from '../../../interfaces/attachment.interface';
import AttachmentOptions from './AttachmentOptions';
import { saveAs } from 'file-saver';

const Attachments = ({ attachment }: IAttachment) => {
  const handleDownload = async (file_url: string, name: string) => {
    try {
      name.replace(/\.[^/.]+$/, '');
      saveAs(file_url, name);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='flex flex-col gap-4'>
      {attachment.map(
        ({ name, file_url, uploaded_at, uploaded_on, _id }, i) => {
          return (
            <div key={i} className='flex flex-row gap-4 w-full pl-9'>
              <section className='relative w-24'>
                <Image
                  src={file_url}
                  alt={`attachment-${i}`}
                  fill
                  sizes='(max-width: 768px) 30vw, 5vw'
                  className='w-fit'
                />
              </section>
              <section className='py-2'>
                <div className='flex flex-row gap-2 font-bold text-gray-800'>
                  <h4>{name}</h4>
                  <Link
                    title='External link'
                    href={file_url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size='sm'
                      className='text-gray-600 hover:text-gray-400'
                    />
                  </Link>
                  <button
                    title='Download'
                    onClick={() => handleDownload(file_url, name)}
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      size='sm'
                      className='text-gray-600 hover:text-gray-400'
                    />
                    {/* </a> */}
                  </button>
                </div>
                <AttachmentOptions
                  uploaded_at={uploaded_at}
                  uploaded_on={uploaded_on}
                  id={_id}
                />
              </section>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Attachments;
