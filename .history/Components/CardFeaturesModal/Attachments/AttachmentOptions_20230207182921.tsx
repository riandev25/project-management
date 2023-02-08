import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IAttachmentOptions {
  uploaded_on: string;
  uploaded_at: string;
}

const AttachmentOptions = ({
  uploaded_on,
  uploaded_at,
}: IAttachmentOptions) => {
  const editHandler = () => {};
  const deleteHandler = () => {};

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
    <div className='text-gray-500'>
      <span>{`Added ${uploaded_on} at ${uploaded_at}`}</span>
      {ACTIONS.map((action, i) => {
        return (
          <span key={i}>
            <FontAwesomeIcon icon={faDotCircle} />
            <button type='button'>{action.name}</button>
          </span>
        );
      })}
    </div>
  );
};

export default AttachmentOptions;
