import { useReducer } from 'react';
import { FeatureContext } from './FeatureContext';
import featureReducer from './featureReducer';
import { FeatureState } from '../../../interfaces/feature';
import React from 'react';

interface props {
  children: JSX.Element | JSX.Element[];
}

const FeatureProvider = ({ children }: props) => {
  // initial state
  // const initialState: FeatureState = {
  //   isFeatureOpen: false,
  //   isLabelOpen: false,
  // };

  const initialState: FeatureState[] = [
    {
      id: 'feature-modal-btn',
      isOpen: false,
    },
    {
      id: 'members-btn',
      isOpen: false,
    },
    {
      id: 'labels-btn',
      isOpen: false,
    },
    {
      id: 'checklist-btn',
      isOpen: false,
    },
    {
      id: 'dates-btn',
      isOpen: false,
    },
    {
      id: 'attachment-btn',
      isOpen: false,
    },
    {
      id: 'cover-btn',
      isOpen: false,
    },
  ];

  const [FeatureState, dispatch] = useReducer(featureReducer, initialState);

  const openFeatureModal = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const id = event.currentTarget.dataset.id;
    dispatch({
      type: 'TOGGLE_FEATURE',
      payload: id,
    });
  };

  // open add card child form
  // const openFeature = () => {
  //   dispatch({
  //     type: 'OPEN_FEATURE',
  //   });
  // };

  // const closeFeature = () => {
  //   dispatch({
  //     type: 'CLOSE_FEATURE',
  //   });
  // };

  // const openLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(event.currentTarget.dataset.id);
  //   dispatch({
  //     type: 'OPEN_LABEL',
  //   });
  // };

  // const closeLabel = () => {
  //   dispatch({
  //     type: 'CLOSE_LABEL',
  //   });
  // };

  return (
    <FeatureContext.Provider
      value={{
        FeatureState,
        openFeatureModal,
        // FeatureState,
        // openFeature,
        // closeFeature,
        // openLabel,
        // closeLabel,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
