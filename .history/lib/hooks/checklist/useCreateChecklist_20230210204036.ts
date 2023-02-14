import { useMutation, useQueryClient } from '@tanstack/react-query';
import checklistService from '../../../services/checklistService';

export const useCreateChecklist = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().createChecklist,
    onMutate: async ({ name, idCard }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['checklists'] });

      // Snapshot the previous value
      const previousChecklists = queryClient.getQueryData(['checklists']);

      // Optimistically update to the new value
      queryClient.setQueryData(['checklists'], (old: any) => [
        ...old,
        { name, idCard },
      ]);
      return { previousChecklists };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newChecklist, context) => {
      queryClient.setQueryData(['checklists'], context?.previousChecklists);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['checklists']);
    },
  });
  return { isSuccess, isError, mutateAsync, isLoading };
};

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import checklistService from '../../../services/checklistService';

// export const useCreateChecklist = () => {
//   const queryClient = useQueryClient();
//   const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
//     mutationFn: checklistService().createChecklist,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['checklists']);
//     },
//   });
//   return { isSuccess, isError, mutateAsync, isLoading };
// };
