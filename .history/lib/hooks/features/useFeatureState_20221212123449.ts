import { useContext } from 'react';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';

const useFeatureState = () => {
  // Context
  const { featureState } = useContext(FeatureContext);

  const isLabelOpen = featureState[1].isOpen;

  return { isLabelOpen };
};
export default useFeatureState;
