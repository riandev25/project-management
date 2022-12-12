export type ChecklistAction = {
  type: 'ADD_CHECKLIST_ITEM';
  payload: {
    title: string;
    description: string;
  };
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
