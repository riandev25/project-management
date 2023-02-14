import { useQueryClient, useMutation } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useDeleteCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().deleteCheckitem,
    onMutate: async (idCheckitem) => {
      await queryClient.cancelQueries({ queryKey: ['checkitems'] });
      const previousCheckitem = queryClient.getQueryData(['checkitems']);
      queryClient.setQueryData(['checkitems', idCheckitem], (old: any) => {
        return old.filter((checkitem: any) => checkitem._id !== idCheckitem);
      });
      return { previousCheckitem, idCheckitem };
    },
    onError: (err, idCheckitem, context) => {
      queryClient.setQueryData(
        ['checkitems', context?.idCheckitem],
        context?.previousCheckitem
      );
    },
    onSettled: (idCheckitem) => {
      queryClient.invalidateQueries(['checkitems', idCheckitem]);
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
