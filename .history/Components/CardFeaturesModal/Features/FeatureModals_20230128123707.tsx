import {
  IFeatureComponent,
  IFeatureModal,
  IFeatureStore,
} from '../../../store/featureStore';
import ChecklistModal from '../Checklist/ChecklistModal';
import LabelsModal from '../Labels/LabelsModal';

const FeatureModals = ({ featureState }: IFeatureModal) => {
  const filtered = featureState.find((feature) => feature.isOpen === true);
  console.log(filtered);
  if (!filtered) return <p>Not Available</p>;
  switch (filtered.name) {
    case 'labels-option':
      return <LabelsModal />;
    case 'checklist-option':
      return <ChecklistModal />;
    default:
      return <p>Not available</p>;
  }
};

export default FeatureModals;
