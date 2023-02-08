import { FieldValues } from 'react-hook-form';
import { IAttachment } from '../../interfaces/attachment.interface';

export const filenameExist = (attachment: IAttachment, data: FieldValues) => {
  if (!attachment.attachment) return;
  const file = attachment.attachment.find(
    (attachment) => attachment.name === data.image[0].name
  );
  return file;
};
