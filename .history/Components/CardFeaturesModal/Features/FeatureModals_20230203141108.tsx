import { IFeatureModal } from '../../../store/featureStore';
import ChecklistModal from '../Checklist/ChecklistModal';
import LabelsModal from '../Labels/LabelsModal';

const FeatureModals = ({ featureState }: IFeatureModal) => {
  const filtered = featureState.find((feature) => feature.isOpen === true);
  if (!filtered)
    return (
      <p
        className='
  hidden'
      ></p>
    );
  switch (filtered.name) {
    case 'Labels':
      return <LabelsModal />;
    case 'Checklist':
      return <ChecklistModal />;
    default:
      return <p></p>;
  }
};

export default FeatureModals;
