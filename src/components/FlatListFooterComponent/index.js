import React from 'react';

import {Colors} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';

export const FlatListFooterComponent = ({text = ''}) => {
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
        paddingLeft="15px"
        paddingRight="15px"
        textAlign="center"
      >
        <StyledText
          padding="20px 0"
          color={Colors.blueGrey}
          fontSize="18px"
          fontWeight="500"
          textAlign="center"
        >
          {text}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
