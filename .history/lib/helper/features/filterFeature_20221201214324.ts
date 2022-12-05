import { FeatureProp } from '../../../interfaces/feature';

export const filterFeature = ({ FeatureState }: FeatureProp) => {
  FeatureState.map((feature) => {
    return feature.isOpen;
  });
};
