import { FeatureState, FeatureProp } from '../../../interfaces/feature';

const isOpen = ({ FeatureState }: FeatureProp) => {
  FeatureState.map((feature) => {
    return feature.isOpen;
  });
};
export default isOpen;
