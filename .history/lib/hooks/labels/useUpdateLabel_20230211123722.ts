import labelService from '../../../services/labelService';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ILabel } from '../../../interfaces/label.interface';

export const useUpdateLabel = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: labelService().updateLabel,
    onMutate: async ({ _id, isChecked }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['labels'],
      });

      // Snapshot the previous value
      const previousCheckitem = queryClient.getQueryData(['labels']);

      // Optimistically update to the new value
      queryClient.setQueryData(['labels'], (oldArray: any) => {
        return oldArray.map((old: ILabel) => {
          if (old._id === _id) return { ...old, isChecked };
          return old;
        });
      });
      return { previousCheckitem, isChecked };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, isChecked, context) => {
      queryClient.setQueryData(
        ['labels', context?.isChecked],
        context?.previousCheckitem
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};

// export const useUpdateLabel = () => {
//   const queryClient = useQueryClient();
//   const { data, isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: labelService().updateLabel,
//     onMutate: async (newLabel) => {
//       // Cancel any outgoing refetches
//       // (so they don't overwrite our optimistic update)
//       await queryClient.cancelQueries({ queryKey: ['labels'] });

//       // Snapshot the previous data
//       const previousLabel = queryClient.getQueryData(['labels']);

//       // Return a context with the previous and new label
//       return { previousLabel, newLabel };
//     },
//     // If mutation fails, use the context we returned above
//     onError: (err, newLabel, context) => {
//       queryClient.setQueryData(
//         ['labels', context?.newLabel._id],
//         context?.previousLabel
//       );
//     },
//     // Always refetch after error or success:
//     onSettled: () => {
//       queryClient.invalidateQueries(['labels']);

//     },
//   });

//   return { data, isError, isSuccess, mutateAsync, isLoading };
// };
