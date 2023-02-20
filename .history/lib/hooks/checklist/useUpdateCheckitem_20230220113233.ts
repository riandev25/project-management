import { useQueryClient, useMutation } from '@tanstack/react-query';
import { ICheckitemObject } from '../../../interfaces/checklist';
import checklistService from '../../../services/checklistService';

export const useUpdateCheckitem = () => {
  const queryClient = useQueryClient();
  const { isSuccess, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: checklistService().updateCheckitem,
    onMutate: async ({
      checkitemId,
      isChecked,
      hasDueDate,
      dueDate,
      pickedDueDate,
    }) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ['checkitems'],
      });

      // Snapshot the previous value
      const previousCheckitem = queryClient.getQueryData(['checkitems']);

      // Optimistically update to the new value
      // queryClient.setQueryData(['checkitems'], (oldCheckitems: any) => {
      //   return oldCheckitems.map((old: ICheckitemObject) => {
      //     if (old._id === checkitemId) return { ...old, isChecked };
      //     return old;
      //   });
      // });
      // return { previousCheckitem, isChecked };
      queryClient.setQueryData(['checkitems'], (oldCheckitems: any) => {
        return oldCheckitems.map((old: ICheckitemObject) => {
          if (old._id === checkitemId) {
            if (hasDueDate) {
              if (hasDueDate === true && dueDate)
                return { ...old, ...dueDate, hasDueDate, pickedDueDate };
              else {
                const {
                  remainingDays,
                  remainingHours,
                  remainingMinutes,
                  remainingSeconds,
                  pickedDueDate,
                  ...newOld
                } = old;
                const a = { ...newOld, isChecked, hasDueDate }
                console.log(a)
                return a;
              }
            } else return { ...old, isChecked };
            // if (old.hasDueDate === true) {
            //   if (dueDate) return {...old, ...dueDate, hasDueDate}
            //   else {
            //     const {remainingDays, remainingHours, remainingMinutes, remainingSeconds, ...newOld} = old
            //     return { ...newOld, isChecked, hasDueDate}
            //   }
            // } else return {...old, isChecked}
          }
          return old;
        });
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
