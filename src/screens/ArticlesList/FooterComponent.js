import React from 'react';

import {Colors, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';

export const FooterComponent = () => {
  return (
    <StyledBox
      borderWidth="2px"
      borderColor={Colors.separatorGrey}
      paddingTop="15px"
      paddingBottom="15px"
      alignItems="center"
    >
      <StyledBox
        borderWidth="2px"
        borderColor={Colors.blueGrey}
        borderRadius="5px"
        width="90%"
        alignItems="center"
      >
        <StyledText
          padding="20px 0"
          color={Colors.blueGrey}
          fontSize="18px"
          fontWeight="500"
        >
          {strings.pullTrigger}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
