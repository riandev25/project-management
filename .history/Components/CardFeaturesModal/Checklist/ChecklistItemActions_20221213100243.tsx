import { useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import useFeatureState from '../../../lib/hooks/features/useFeatureState';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const ChecklistItemActions = () => {
  const { isChecklistItemOpen } = useFeatureState();
  const { dispatchFeature } = useContext(FeatureContext);

  const exitBtnHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'checklist-item-option' },
    });
  };

  return (
    <div>
      <HeaderModal
        title='Item actions'
        idFeature='checklist-item-option'
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
    </div>
  );
};
export default ChecklistItemActions;
