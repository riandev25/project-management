export type checklistAction = {
  type: 'ADD_CHECKLIST_TOGGLE';
  payload?: string;
};

export interface IChecklistArray {
  title: string;
  percentage: number;
  checkListData: IChecklist[];
}

export interface IChecklist {
  description: string;
  isChecked: boolean;
}
