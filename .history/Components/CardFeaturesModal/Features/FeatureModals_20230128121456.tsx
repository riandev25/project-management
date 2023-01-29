import { IFeatureComponent } from '../../../store/featureStore';
import ChecklistModal from '../Checklist/ChecklistModal';
import LabelsModal from '../Labels/LabelsModal';

const FeatureModals = (featureState: IFeatureComponent[]) => {
  const filtered = featureState.find((feature) => feature.isOpen === true);
  switch (filtered?.name) {
    case 'labels-option':
      return <LabelsModal />;
    case 'checklist-option':
      return <ChecklistModal />;
  }
};

export default FeatureModals;
