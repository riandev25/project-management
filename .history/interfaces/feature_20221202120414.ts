// Toggle feature modal
export type FeatureAction =
  | { type: 'TOGGLE_FEATURE'; payload?: string }
  | { type: 'CLOSE_FEATURE' }
  | { type: 'OPEN_LABEL' }
  | { type: 'CLOSE_LABEL' };

// export interface FeatureState {
//   isFeatureOpen: boolean;
//   isLabelOpen: boolean;
// }

export interface FeatureState {
  id?: string;
  isOpen?: boolean;
}

export interface FeatureProp {
  FeatureState: FeatureState[];
  idLeft: string;
  idX: string;
}
