import { ICheckitemModals } from '../../store/checklistStore';

export const filterCheckitem = (
  checklistState: ICheckitemModals[],
  _id: string,
  filtered: string
) => {
  const filteredCheckState = checklistState.find(
    (checklist) => checklist._id === _id
  );
  if (filtered === 'option-btn') return filteredCheckState?.isOptionOpen;
};
