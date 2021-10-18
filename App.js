import React from 'react';

import {SummaryScreen} from './src/screens';
import {StyledSafeAreaView} from './src/common-styled-components';
import {Colors} from './src/constants';

const App = () => {
  return (
    <StyledSafeAreaView flex={1} bgColor={Colors.lightGrey}>
      <SummaryScreen />
    </StyledSafeAreaView>
  );
};

export default App;
