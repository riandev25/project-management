import { useContext, useReducer } from 'react';
import { FeatureContext } from './FeatureContext';
import featureReducer from './featureReducer';
import { FeatureState } from '../../../interfaces/feature';
import React from 'react';
import { LabelContext } from '../LabelContext/LabelContext';

interface props {
  children: JSX.Element | JSX.Element[];
}

const FeatureProvider = ({ children }: props) => {
  const initialState: FeatureState[] = [
    {
      id: 'feature-modal',
      isOpen: false,
    },
    {
      id: 'members-option',
      isOpen: false,
    },
    {
      id: 'labels-option',
      isOpen: false,
    },
    {
      id: 'labels-sub-option',
      isOpen: false,
    },
    {
      id: 'checklist-option',
      isOpen: false,
    },
    {
      id: 'dates-option',
      isOpen: false,
    },
    {
      id: 'attachment-option',
      isOpen: false,
    },
    {
      id: 'cover-option',
      isOpen: false,
    },
  ];

  const { dispatchLabel } = useContext(LabelContext);
  const [FeatureState, dispatch] = useReducer(featureReducer, initialState);

  const openFeatureModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const id = event.currentTarget.dataset.id;
    const name = event.currentTarget.dataset.name;
    dispatch({
      type: 'TOGGLE_FEATURE',
      payload: { id: id },
    });
    console.log(name);
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: name,
    });
  };

  return (
    <FeatureContext.Provider
      value={{
        FeatureState,
        openFeatureModal,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
