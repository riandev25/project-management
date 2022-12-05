import { FeatureProp } from '../../../interfaces/feature';

const filterFeature = ({ FeatureState }: FeatureProp) => {
  FeatureState.map((feature) => {
    return feature.isOpen;
  });
};
export default filterFeature;
