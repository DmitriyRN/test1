import React from 'react';

import {ArticlesList} from './src/screens';
import {StyledSafeAreaView} from './src/common-styled-components/styled-components';

const App = () => {
  return (
    <StyledSafeAreaView>
      <ArticlesList />
    </StyledSafeAreaView>
  );
};

export default App;
