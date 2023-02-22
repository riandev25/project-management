import { useQuery } from '@tanstack/react-query';
import { IAttachmentObject } from '../../../interfaces/attachment.interface';
import attachmentService from '../../../services/attachmentService';

export const useGetAttachments = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery<
    IAttachmentObject[]
  >({
    queryKey: ['attachments'],
    queryFn: attachmentService().getAttachment,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
