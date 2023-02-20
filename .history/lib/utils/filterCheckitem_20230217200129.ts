import { ICheckitemModals } from '../../store/checklistStore';

export const filterCheckitem = (
  checklistState: ICheckitemModals[],
  _id: string
) => {
  const filteredCheckState = checklistState.find(
    (checklist) => checklist._id === _id
  );
  // if (filtered === 'option-btn') return filteredCheckState?.isOptionOpen;
  // if (filtered === 'date-time-btn') return filteredCheckState?.isDateOptionOpen;
  const isOptionOpen = filteredCheckState?.isOptionOpen;
  const isDateOptionOpen = filteredCheckState?.isDateOptionOpen;
  return { isOptionOpen, isDateOptionOpen };
};
