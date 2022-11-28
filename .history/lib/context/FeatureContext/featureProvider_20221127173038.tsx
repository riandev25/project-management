import { useReducer } from 'react';
import { useFeatureContext } from '../../hooks/useFeatureContext';
import featureReducer from './featureReducer';
import { FeatureState } from '../../../interfaces/feature';

interface props {
  children: JSX.Element | JSX.Element[];
}

const FeatureProvider = ({ children }: props) => {
  // initial state
  const initialState: FeatureState = {
    isFeatureOpen: false,
  };

  const [FeatureState, dispatch] = useReducer(featureReducer, initialState);

  // // open add card child form
  const openFeature = () => {
    dispatch({
      type: 'OPEN_FEATURE',
    });
  };

  const closeFeature = () => {
    console.log('close');
    dispatch({
      type: 'CLOSE_FEATURE',
    });
  };

  return (
    <useFeatureContext.Provider
      value={{
        FeatureState,
        openFeature,
        closeFeature,
      }}
    >
      {children}
    </useFeatureContext.Provider>
  );
};

export default FeatureProvider;
