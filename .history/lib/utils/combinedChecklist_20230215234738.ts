import { IChecklistArrays } from '../../interfaces/checklist';
import { cardIdStore } from '../../store/cardStore';
import { getLocalStorage } from './localStorage';

const { idCard } = cardIdStore((state) => ({
  idCard: state.idCard,
}));

export const combinedChecklist = (
  checklistData: any,
  checkitemData: any
): IChecklistArrays[] => {
  return checklistData.map((checklist: any) => {
    const filteredCheckItem = checkitemData.filter(
      (checkitem: any) => checkitem.idCard === idCard
    );
    return { ...checklist, checkitem: filteredCheckItem };
  });
};
