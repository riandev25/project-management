import {
  faArrowUpRightDots,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { IAttachment } from '../../../interfaces/attachment.interface';
import AttachmentOptions from './AttachmentOptions';

const Attachments = ({ attachment }: IAttachment) => {
  return (
    <section className='flex flex-col'>
      {attachment.map(({ name, file_url, uploaded_at, uploaded_on }, i) => {
        return (
          <div key={i} className='flex flex-row w-full pl-9'>
            <section className=''>
              <Image
                src={file_url}
                alt={`attachment-${i}`}
                width={75}
                height={25}
                className='w-28 h-24'
              />
            </section>
            <section>
              <div className='flex flex-row'>
                <h4>{name}</h4>
                <Link href={file_url} legacyBehavior>
                  <a>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size='lg'
                      className='text-gray-600'
                    />
                  </a>
                </Link>
              </div>
              <AttachmentOptions
                uploaded_at={uploaded_at}
                uploaded_on={uploaded_on}
              />
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Attachments;
