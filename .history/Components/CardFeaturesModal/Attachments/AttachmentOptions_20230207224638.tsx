import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDeleteAttachment } from '../../../lib/hooks/attachment/useDeleteAttachment';

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
      name: 'Delete',
      action: deleteHandler,
    },
  ];

  return (
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
              className='bg-transparent underline hover:text-gray-700'
            >
              {action.name}
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default AttachmentOptions;
