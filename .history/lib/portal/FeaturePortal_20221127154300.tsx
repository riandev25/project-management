import { useFeatureContext } from '../hooks/useFeatureContext';
import { Fragment, useContext } from 'react';

const FeaturePortal = () => {
  const { FeatureState } = useContext(useFeatureContext);
  const { isFeatureOpen } = FeatureState;
  return (
    <Fragment>
      {isFeatureOpen && (
        <div
          id='myportal'
          className='absolute top-0 left-0 flex justify-center items-center w-screen min-h-screen'
        />
      )}
    </Fragment>
  );
};
export default FeaturePortal;
