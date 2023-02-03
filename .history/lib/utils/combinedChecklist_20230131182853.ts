import { ICheckitemObject } from '../../interfaces/checklist';
import { getLocalStorage } from './localStorage';

export const combinedChecklist = (
  checklistData: any,
  checkitemData: any
): ICheckitemObject[] => {
  const idCard = getLocalStorage('idCard');
  return checklistData.map((checklist: any) => {
    const filteredCheckItem = checkitemData.filter(
      (checkitem: any) => checkitem._idCard === idCard
    );
    console.log(checkitemData);
    return { ...checklist, checklist: filteredCheckItem };
  });
};
