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
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['checkitems'] });

      // Snapshot the previous value
      const previousCheckitem = queryClient.getQueryData(['checkitems']);

      // Optimistically update to the new value
      queryClient.setQueryData(['checkitems'], (old: any) => [
        ...old,
        newCheckitem,
      ]);
      return { previousCheckitem };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newCheckitem, context) => {
      queryClient.setQueryData(['checkitems'], context?.previousCheckitem);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['checkitems']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
