import { ICheckitemObject } from '../../interfaces/checklist';

export const getChecklistPercentage = (
  checkitem: ICheckitemObject[]
): string => {
  const percentItems = checkitem.filter((checklist) => {
    return checklist.isChecked ? checklist : undefined;
  });
  return String(Math.round((percentItems.length / checkitem.length) * 100));
};
