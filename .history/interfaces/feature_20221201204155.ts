// Toggle feature modal
export type FeatureAction =
  | { type: 'OPEN_FEATURE'; payload: string }
  | { type: 'CLOSE_FEATURE' }
  | { type: 'OPEN_LABEL' }
  | { type: 'CLOSE_LABEL' };

// export interface FeatureState {
//   isFeatureOpen: boolean;
//   isLabelOpen: boolean;
// }

export interface FeatureState {
  id: string;
  isOpen: boolean;
}
