import { IChecklistArrays } from '../../interfaces/checklist';
import { cardIdStore } from '../../store/cardStore';
import { getLocalStorage } from './localStorage';

export const combinedChecklist = (
  checklistData: any,
  checkitemData: any,
  idCard?: string
): IChecklistArrays[] => {
  console.log(checkitemData[0]);
  return checklistData.map((checklist: any) => {
    const filteredCheckItem = checkitemData.filter(
      (checkitem: any) => checkitem.idCard === idCard
    );
    return { ...checklist, checkitem: filteredCheckItem };
  });
};
