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

const Attachments = ({ attachment }: IAttachment) => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  const handleDownload = async (file_url: string) => {
    const response = await fetch(file_url);
    const blob = await response.blob();
    setObjectUrl(URL.createObjectURL(blob));
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
                  className='w-fit'
                />
              </section>
              <section className='py-2'>
                <div className='flex flex-row gap-2 font-bold text-gray-800'>
                  <h4>{name}</h4>
                  <Link
                    href={file_url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size='xs'
                      className='text-gray-600'
                    />
                  </Link>
                  <Link
                    href={objectUrl || ''}
                    download={name}
                    onClick={() => handleDownload(file_url)}
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      size='xs'
                      className='text-gray-600'
                    />
                  </Link>
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
