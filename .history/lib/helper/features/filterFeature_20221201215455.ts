import { FeatureProp } from '../../../interfaces/feature';

export const filterFeature = ({ FeatureState, id }: FeatureProp) => {
  FeatureState.map((feature) => {
    if (feature.id === id) return feature.isOpen;
  });
};
