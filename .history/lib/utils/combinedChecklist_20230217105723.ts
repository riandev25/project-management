import { IChecklistArrays } from '../../interfaces/checklist';

export const combinedChecklist = (
  checklistData: any,
  checkitemData: any,
  idCard?: string
): IChecklistArrays[] => {
  return checklistData.map((checklist: any) => {
    const filteredCheckItem = checkitemData.filter(
      (checkitem: any) => checkitem.idCard === idCard
    );
    return { ...checklist, checkitem: filteredCheckItem };
  });
};
