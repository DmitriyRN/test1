import React from 'react';

import {strings} from '../../constants';
import {
  StyledFooterContainer,
  MainBlock,
  FooterText,
} from './styled-components';

export const FooterComponent = () => {
  return (
    <StyledFooterContainer>
      <MainBlock>
        <FooterText>{strings.pullTrigger}</FooterText>
      </MainBlock>
    </StyledFooterContainer>
  );
};
