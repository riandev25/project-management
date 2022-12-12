export type ChecklistAction =
  | {
      type: 'ADD_CHECKLIST_ITEM';
      payload: {
        title: string;
        description: string;
      };
    }
  | { type: 'TOGGLE_CHECKBOX'; payload: string };

export interface IChecklistArray {
  title: string;
  percentage?: number;
  checklistItems: IChecklist[];
}

export interface IChecklist {
  description: string;
  isChecked: boolean;
}
