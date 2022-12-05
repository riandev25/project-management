import { useReducer } from 'react';
import { FeatureContext } from './FeatureContext';
import portalReducer from './portalReducer';
import { FeatureState } from '../../../interfaces/feature';
import React from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
}

const PortalProvider = ({ children }: props) => {
  const initialState = {
    portal: '',
  };

  const [portalState, dispatch] = useReducer(portalReducer, initialState);

  const changeLabelPortal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const id = event.currentTarget.dataset.id;
    dispatch({
      type: 'CHANGE_LABEL_PORTAL',
      payload: id,
    });
  };

  return (
    <FeatureContext.Provider
      value={{
        PortalState,
        changeLabelPortal,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export default PortalProvider;
