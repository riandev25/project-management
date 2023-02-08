import { FieldValues } from 'react-hook-form';
import { IAttachmentObject } from '../../interfaces/attachment.interface';

export const filenameExist = (
  attachment: IAttachmentObject[],
  data: FieldValues
) => {
  if (!attachment) return;
  const file = attachment.find(
    (attachment) => attachment.name === data.image[0].name
  );
  return file;
};
