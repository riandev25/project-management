import { FeatureAction } from '../../../interfaces/feature';

const portalReducer = (portalState: string, action: PortalAction): string => {
  switch (action.type) {
    case 'CHANGE_LABEL_PORTAL':

    default:
      return portalState;
  }
};

export default portalReducer;
