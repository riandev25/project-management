import { useContext } from 'react';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';

const useFeatureState = () => {
  // Context
  const { featureState } = useContext(FeatureContext);

  const isFeatureOpen = featureState[0].isOpen;
  const isLabelOpen = featureState[2].isOpen;
  const isChecklistOpen = featureState[3].isOpen;
  const isChecklistItem1Open = featureState[4].isOpen;
  const isChecklistItem2Open = featureState[5].isOpen;
  const isChecklistItem3Open = featureState[6].isOpen;

  return {
    isLabelOpen,
    isChecklistOpen,
    isFeatureOpen,
    isChecklistItem1Open,
    isChecklistItem2Open,
    isChecklistItem3Open,
  };
};
export default useFeatureState;
