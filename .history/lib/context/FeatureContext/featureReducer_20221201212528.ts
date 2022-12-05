import { FeatureAction, FeatureState } from '../../../interfaces/feature';

// | { type: 'OPEN_ADDCARDCHILD' }
// | { type: 'CLOSE_ADDCARDCHILD' }
// | { type: 'OPEN_CARD_OPTION' }
// | { type: 'CLOSE_CARD_OPTION' }
// | { type: 'OPEN_CARD_FORM' }
// | { type: 'CLOSE_CARD_FORM' };

const featureReducer = (
  FeatureState: FeatureState[],
  action: FeatureAction
): FeatureState[] => {
  switch (action.type) {
    // case 'OPEN_FEATURE':
    //   return { ...state, isFeatureOpen: true };

    // case 'CLOSE_FEATURE':
    //   return { ...state, isFeatureOpen: false };

    // case 'OPEN_LABEL':
    //   return { ...state, isLabelOpen: true };

    // case 'CLOSE_LABEL':
    //   return { ...state, isLabelOpen: false };

    case 'TOGGLE_FEATURE':
      const newState = FeatureState.map((feature) => {
        if (feature.id === action.payload) {
          if (!feature.isOpen) {
            return { ...feature, isOpen: true };
          } else {
            return { ...feature, isOpen: false };
          }
        }
        return { ...feature };
      });
      return { ...newState };

    default:
      return { ...FeatureState };
  }
};

export default featureReducer;
