import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { useDeleteAttachment } from '../../../lib/hooks/attachment/useDeleteAttachment';
import Portal from '../../../lib/portal/Portal';
import DeleteWarning from '../../../UI/Modal/DeleteWarning';

interface IAttachmentOptions {
  uploaded_on: string;
  uploaded_at: string;
  id: string;
}

const AttachmentOptions = ({
  uploaded_on,
  uploaded_at,
  id,
}: IAttachmentOptions) => {
  // Data fetching

  const { mutateAsync: mutateDeleteAttachment, isLoading: isDeleteLoading } =
    useDeleteAttachment();

  const editHandler = () => {};
  const deleteHandler = async () => {
    await mutateDeleteAttachment(id);
  };

  const ACTIONS = [
    {
      name: 'Edit',
      action: editHandler,
    },
    {
      name: isDeleteLoading ? 'Deleting...' : 'Delete',
      action: deleteHandler,
    },
  ];

  return (
    <Fragment>
      <div className='flex flex-row gap-3 text-sm text-gray-500'>
        <span>{`Added ${uploaded_on} at ${uploaded_at}`}</span>
        {ACTIONS.map((action, i) => {
          return (
            <span
              key={i}
              className='flex flex-row justify-center items-center gap-3'
            >
              <FontAwesomeIcon icon={faDotCircle} size='2xs' />
              <button
                type='button'
                // disabled={}
                className='bg-transparent underline hover:text-gray-700'
              >
                {action.name}
              </button>
              <Portal portalId='#myportal'>
                <DeleteWarning name='attachment' />
              </Portal>
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default AttachmentOptions;
