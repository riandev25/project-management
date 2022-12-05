// Toggle feature modal
export type FeatureAction = {
  type: 'TOGGLE_FEATURE';
  payload: { id?: string; effect?: string };
};

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
  id: string;
}
