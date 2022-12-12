export type ChecklistAction = {
  type: 'ADD_CHECKLIST_ITEM';
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
