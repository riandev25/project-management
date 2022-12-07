import { FeatureAction, FeatureState } from '../../../interfaces/feature';

// | { type: 'OPEN_ADDCARDCHILD' }
// | { type: 'CLOSE_ADDCARDCHILD' }
// | { type: 'OPEN_CARD_OPTION' }
// | { type: 'CLOSE_CARD_OPTION' }
// | { type: 'OPEN_CARD_FORM' }
// | { type: 'CLOSE_CARD_FORM' };

const featureReducer = (
  featureState: FeatureState[],
  action: FeatureAction
): FeatureState[] => {
  switch (action.type) {
    case 'TOGGLE_FEATURE':
      const newState = featureState.map((feature) => {
        const { id } = action.payload;
        if (feature.id === id) {
          if (!feature.isOpen) {
            return { ...feature, isOpen: true };
          } else {
            return { ...feature, isOpen: false };
          }
        }
        return feature;
      });
      console.log(newState);
      return newState;

    default:
      return { ...featureState };
  }
};

export default featureReducer;
