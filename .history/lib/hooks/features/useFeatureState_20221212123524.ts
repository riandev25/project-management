import { useContext } from 'react';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';

const useFeatureState = () => {
  // Context
  const { featureState } = useContext(FeatureContext);

  const isLabelOpen = featureState[1].isOpen;
  const isChecklistOpen = featureState[2].isOpen;

  return { isLabelOpen, isChecklistOpen };
};
export default useFeatureState;
