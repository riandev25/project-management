import { LabelAction, Labels } from '../../../interfaces/data';

const dataReducer = (state: Labels[], action: LabelAction): Labels[] => {
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
