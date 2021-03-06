import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './styles';

const Spinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}/>
    );
  };
  return Spinner;
};

export default  Spinner;
