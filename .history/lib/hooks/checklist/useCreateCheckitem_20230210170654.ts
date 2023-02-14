// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import checklistService from '../../../services/checklistService';

// export const useCreateCheckitem = () => {
//   const queryClient = useQueryClient();
//   const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: checklistService().createCheckitem,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['checkitems']);
//     },
//   });
//   return { isSuccess, isError, mutateAsync, isLoading };
// };

import { useMutation, useQueryClient } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useCreateCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().createCheckitem,
    onMutate: async (newCheckitem) => {
      await queryClient.cancelQueries({ queryKey: ['checkitems'] });
      const previousCheckitem = queryClient.getQueryData(['checkitems']);
      queryClient.setQueryData(['checkitems'], (old: any) => [
        ...old,
        newCheckitem,
      ]);
      return { previousCheckitem };
    },
    onError: (err, newCheckitem, context) => {
      queryClient.setQueryData(['checkitems'], context?.previousCheckitem);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['checkitems']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
