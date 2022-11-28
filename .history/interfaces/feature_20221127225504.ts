// Toggle feature modal
export type FeatureAction = {
  type: string;
};

export interface FeatureState {
  isFeatureOpen: boolean;
  isLabelOpen: boolean;
}
