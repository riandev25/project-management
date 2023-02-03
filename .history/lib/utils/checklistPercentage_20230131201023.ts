import { ICheckitemObject } from "../../interfaces/checklist";

export const getChecklistPercentage = (checkitem: ICheckitemObject[]): number => {
  const percentItems = checkitem.filter((checklist) => {
    return checklist.isChecked ? checklist : undefined;
  });
  return Math.round((percentItems.length / checkitem.length) * 100);
};