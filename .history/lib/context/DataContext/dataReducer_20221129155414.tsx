import { Labels as LabelState, LabelAction } from '../../../interfaces/data';

const dataReducer = (state: any, action: LabelAction): any => {
  switch (action.type) {
    case 'ADD_LABEL':
      return { ...state, isChecked: true };

    case 'REMOVE_LABEL':
      return { ...state, isChecked: false };

    default:
      return { ...state };
  }
};

export default dataReducer;
