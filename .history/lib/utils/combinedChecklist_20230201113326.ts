import { IChecklistArrays } from '../../interfaces/checklist';
import { getLocalStorage } from './localStorage';

export const combinedChecklist = (
  checklistData: any,
  checkitemData: any
): IChecklistArrays[] => {
  const idCard = getLocalStorage('idCard');
  return checklistData.map((checklist: any) => {
    const filteredCheckItem = checkitemData.filter(
      (checkitem: any) => checkitem.idCard === idCard
    );
    return { ...checklist, checkitem: filteredCheckItem };
  });
};
