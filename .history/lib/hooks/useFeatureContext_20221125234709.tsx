import { createContext } from 'react';
import { FeatureState } from '../../interfaces/feature';

// context
type FeatureProp = {
  FeatureState: FeatureState;
  openFeature(): void;
  closeFeature(): void;
};
export const useFeatureContext = createContext<FeatureProp>({} as FeatureProp);
