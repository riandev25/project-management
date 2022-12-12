export type ChecklistAction =
  | {
      type: 'ADD_CHECKLIST_ITEM';
      payload: {
        idCheckArray: number;
        idCheck: number
        description: string;
      };
    }
  | {
      type: 'TOGGLE_CHECKBOX';
      payload: { idCheckArray: number; idCheck?: number };
    }
  | { type: 'CHECKLIST_PERCENTAGE'; payload: { title: string; id?: string } };

export interface IChecklistArray {
  id: number;
  title: string;
  percentage: number;
  checklistItems: IChecklist[];
}

export interface IChecklist {
  id?: number;
  description: string;
  isChecked: boolean;
}
