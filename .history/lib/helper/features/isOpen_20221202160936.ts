import { FeatureState, FeatureProp } from '../../../interfaces/feature';

const isOpen = (prop: FeatureProp) => {
  prop.FeatureState.map((feature) => {
    return feature.isOpen;
  });
};
export default isOpen;
