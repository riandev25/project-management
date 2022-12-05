// Toggle feature modal
export type FeatureAction = { type: 'TOGGLE_FEATURE'; payload?: string };

// export interface FeatureState {
//   isFeatureOpen: boolean;
//   isLabelOpen: boolean;
// }

export interface IOptions {
  id: string;
  isOpen: boolean;
}

export interface ISubOptions {
  id: string;
  isOpen: boolean;
}

export interface FeatureState {
  options: IOptions[];
  subOptions: ISubOptions[];
}

// export interface FeatureState {
//   id?: string;
//   isOpen?: boolean;
// }

export interface FeatureProp {
  FeatureState: FeatureState[];
  id: string;
}
