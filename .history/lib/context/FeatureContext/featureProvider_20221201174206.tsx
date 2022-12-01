import { useReducer } from 'react';
import { FeatureContext } from './FeatureContext';
import featureReducer from './featureReducer';
import { FeatureState } from '../../../interfaces/feature';

interface props {
  children: JSX.Element | JSX.Element[];
}

const FeatureProvider = ({ children }: props) => {
  // initial state
  const initialState: FeatureState = {
    isFeatureOpen: false,
    isLabelOpen: false,
  };

  const [FeatureState, dispatch] = useReducer(featureReducer, initialState);

  // // open add card child form
  const openFeature = () => {
    dispatch({
      type: 'OPEN_FEATURE',
    });
  };

  const closeFeature = () => {
    dispatch({
      type: 'CLOSE_FEATURE',
    });
  };

  const openLabel = () => {
    console.log;
    dispatch({
      type: 'OPEN_LABEL',
    });
  };

  const closeLabel = () => {
    dispatch({
      type: 'CLOSE_LABEL',
    });
  };

  return (
    <FeatureContext.Provider
      value={{
        FeatureState,
        openFeature,
        closeFeature,
        openLabel,
        closeLabel,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
