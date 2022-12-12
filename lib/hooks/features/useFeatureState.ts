import { useContext } from 'react';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';

const useFeatureState = () => {
  // Context
  const { featureState } = useContext(FeatureContext);

  const isFeatureOpen = featureState[0].isOpen;
  const isLabelOpen = featureState[2].isOpen;
  const isChecklistOpen = featureState[3].isOpen;

  return { isLabelOpen, isChecklistOpen, isFeatureOpen };
};
export default useFeatureState;
