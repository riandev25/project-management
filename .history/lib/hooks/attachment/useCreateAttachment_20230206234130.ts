import { useMutation, useQueryClient } from '@tanstack/react-query';
import attachmentService from '../../../services/attachmentService';

export const useCreateAttachment = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: attachmentService().createAttachment,
    onSuccess: () => {
      queryClient.invalidateQueries(['attachments']);
    },
  });

  return { data, isError, isSuccess, mutateAsync, isLoading };
};
