import { useQuery } from '@tanstack/react-query';
import attachmentService from '../../../services/attachmentService';

export const useGetAttachments = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['attachments'],
    queryFn: attachmentService().getAttachment,
  });

  return { data, isError, isSuccess, isLoading, refetch };
};
