export type ChecklistAction =
  | {
      type: 'ADD_CHECKLIST_ITEM';
      payload: {
        idCheckArray: number;
        idCheck: number;
        description: string;
      };
    }
  | {
      type: 'TOGGLE_CHECKBOX';
      payload: { idCheckArray: number; idCheck?: number };
    }
  | {
      type: 'CHECKLIST_PERCENTAGE';
      payload: { id: number; percentage: number };
    }
  | {
      type: 'ADD_CHECKLIST';
      payload: {
        title: string;
        description: string;
        idCheckArray: number;
      };
    }
  | {
      type: 'DELETE_CHECKLIST';
      payload: {
        id: number;
      };
    }
  | {
      type: 'TOGGLE_OPTION';
      payload: {
        idCheckArray: number;
        idCheck: number;
        idBtn?: string;
      };
    }
  | {
      type: 'DELETE_CHECKLIST_ITEM';
      payload: {
        idCheckArray: number;
        idCheck: number;
        idBtn: string;
      };
    };

export interface IChecklistArray {
  id: number;
  title: string;
  percentage: number;
  checklistItems: IChecklist[];
}

export interface IChecklist {
  id: number;
  description: string;
  isChecked: boolean;
  isOptionOpen: boolean;
}

// Updated

export interface ICheckitemObject {
  _id: string;
  pos: number;
  name: string;
  isChecked: boolean;
  idChecklist: string;
  idCard: string;
}

export interface IChecklistArrays {
  _id: string;
  name: string;
  idCard?: string;
  checkitem: [ICheckitemObject];
}

// export interface IChecklistArray {
//   checklist
// }
