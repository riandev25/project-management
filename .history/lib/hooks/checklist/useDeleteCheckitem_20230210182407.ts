import { useQueryClient, useMutation } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useDeleteCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().deleteCheckitem,
    onMutate: async (checkitemId) => {
      await queryClient.cancelQueries({
        queryKey: ['checkitems'],
      });
      const previousCheckitem = queryClient.getQueryData(['checkitems']);
      queryClient.setQueryData(['checkitems', checkitemId], (old: any) => {
        console.log(previousCheckitem);
        return old.filter((checkitem: any) => checkitem._id !== checkitemId);
      });
      return { previousCheckitem, checkitemId };
    },
    onError: (err, checkitemId, context) => {
      queryClient.setQueryData(
        ['checkitems', context?.checkitemId],
        context?.previousCheckitem
      );
    },
    onSettled: (checkitemId) => {
      queryClient.invalidateQueries(['checkitems', checkitemId]);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import checklistService from '../../../services/checklistService';

// export const useDeleteCheckitem = () => {
//   const queryClient = useQueryClient();
//   const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: checklistService().deleteCheckitem,
//     onMutate: (data) => {
//       console.log(data);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['checkitems']);
//     },
//   });
//   return { isSuccess, isError, mutateAsync, isLoading };
// };
