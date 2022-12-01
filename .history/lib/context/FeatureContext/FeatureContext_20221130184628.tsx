import { createContext } from 'react';
import { FeatureState } from '../../../interfaces/feature';

// context
type FeatureProp = {
  FeatureState: FeatureState;
  openFeature(): void;
  closeFeature(): void;
  openLabel(): void;
  closeLabel(): void;
};
export const FeatureContext = createContext<FeatureProp>({} as FeatureProp);
