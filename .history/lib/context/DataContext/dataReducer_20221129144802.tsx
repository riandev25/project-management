import { FeatureAction, FeatureState } from '../../../interfaces/feature';

const featureReducer = (
  state: FeatureState,
  action: FeatureAction
): FeatureState => {
  switch (action.type) {
    case 'OPEN_FEATURE':
      return { ...state, isFeatureOpen: !state };

    case 'CLOSE_FEATURE':
      return { ...state, isFeatureOpen: false };

    case 'OPEN_LABEL':
      return { ...state, isLabelOpen: true };

    case 'CLOSE_LABEL':
      return { ...state, isLabelOpen: false };

    default:
      return { ...state };
  }
};

export default featureReducer;
