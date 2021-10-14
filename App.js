import React from 'react';

import {ArticlesList} from './src/screens';
import {StyledSafeAreaView} from './src/common-styled-components';
import {Colors} from './src/constants';

const App = () => {
  return (
    <StyledSafeAreaView flex={1} bgColor={Colors.lightGrey}>
      <ArticlesList />
    </StyledSafeAreaView>
  );
};

export default App;
