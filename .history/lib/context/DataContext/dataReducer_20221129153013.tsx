import { Labels as LabelState, LabelAction } from '../../../interfaces/data';

const dataReducerReducer = (
  state: LabelState,
  action: LabelAction
): LabelState => {
  switch (action.type) {
    case 'ADD_LABEL':
      return { ...state, isChecked: true };

    case 'REMOVE_LABEL':
      return { ...state, isChecked: false };

    default:
      return { ...state };
  }
};

export default dataReducerReducer;
