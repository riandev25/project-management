import { useContext } from 'react';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';

const useFeatureState = () => {
  // Context
  const { featureState } = useContext(FeatureContext);

  const isLabelOpen = featureState[1].isOpen;
  const isChecklistOpen = featureState[2].isOpen;
  const isFeatureOpen = featureState[6].isOpen;

  return { isLabelOpen, isChecklistOpen };
};
export default useFeatureState;
