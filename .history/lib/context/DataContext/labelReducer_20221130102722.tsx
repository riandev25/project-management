import { ILabels, LabelAction } from '../../../interfaces/data';

const dataReducer = (state: ILabels[], action: LabelAction): ILabels[] => {
  switch (action.type) {
    case 'ADD_LABEL':
      return [...state, { isChecked: true }];

    case 'REMOVE_LABEL':
      return [...state, { isChecked: false }];

    default:
      return { ...state };
  }
};

export default dataReducer;
