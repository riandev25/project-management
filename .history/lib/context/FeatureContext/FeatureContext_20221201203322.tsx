import { createContext } from 'react';
import { FeatureState } from '../../../interfaces/feature';

// context
type FeatureProp = {
  FeatureState: FeatureState;
  openFeature(): void;
  // closeFeature(): void;
  // openLabel(event: React.MouseEvent<HTMLButtonElement>): void;
  // closeLabel(): void;
};
export const FeatureContext = createContext<FeatureProp>({} as FeatureProp);
