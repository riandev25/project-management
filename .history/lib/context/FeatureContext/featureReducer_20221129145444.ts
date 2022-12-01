import { FeatureAction, FeatureState } from '../../../interfaces/feature';

// | { type: 'OPEN_ADDCARDCHILD' }
// | { type: 'CLOSE_ADDCARDCHILD' }
// | { type: 'OPEN_CARD_OPTION' }
// | { type: 'CLOSE_CARD_OPTION' }
// | { type: 'OPEN_CARD_FORM' }
// | { type: 'CLOSE_CARD_FORM' };

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
