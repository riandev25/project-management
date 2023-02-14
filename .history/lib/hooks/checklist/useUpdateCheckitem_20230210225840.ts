// import { useMutation, useQueryClient } from '@tanstack/react-query';

// import checklistService from '../../../services/checklistService';

// export const useUpdateCheckitem = () => {
//   const queryClient = useQueryClient();
//   const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: checklistService().updateCheckitem,
//     onMutate: async (newCheckitem) => {
//       // Cancel any outgoing refetches
//       // (so they don't overwrite our optimistic update)
//       await queryClient.cancelQueries({
//         queryKey: ['checkitem', newCheckitem._id],
//       });

//       // Snapshot the previous data
//       const previousLabel = queryClient.getQueryData([
//         'checkitem',
//         newCheckitem._id,
//       ]);

//       // Return a context with the previous and new label
//       return { previousLabel, newCheckitem };
//     },
//     // If mutation fails, use the context we returned above
//     onError: (err, newCheckitem, context) => {
//       queryClient.setQueryData(
//         ['checkitem', context?.newCheckitem._id],
//         context?.previousLabel
//       );
//     },
//     // Always refetch after error or success:
//     onSettled: (newCheckitem) => {
//       queryClient.invalidateQueries(['checkitem', newCheckitem._id]);
//     },
//   });

//   return { data, isError, isSuccess, mutateAsync, isLoading };
// };

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ICheckitemObject } from '../../../interfaces/checklist';
import checklistService from '../../../services/checklistService';

export const useUpdateCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().updateCheckitem,
    onMutate: async ({ isChecked, checkitemId }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['checkitems'],
      });

      // Snapshot the previous value
      const previousCheckitem = queryClient.getQueryData(['checkitems']);

      // Optimistically update to the new value
      queryClient.setQueryData(['checkitems'], (oldArray: any) => {
        const newData = oldArray.find(
          (old: ICheckitemObject) => old._id === checkitemId
        );
        newData.isChecked = isChecked;
        return [...oldArray, newData];
      });
      return { previousCheckitem, isChecked };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, isChecked, context) => {
      queryClient.setQueryData(
        ['checkitems', context?.isChecked],
        context?.previousCheckitem
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(['checkitems']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};
