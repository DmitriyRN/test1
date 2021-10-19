import React from 'react';

import {
  StyledTouchableOpacity,
  StyledText,
} from '../../common-styled-components';
import {Colors} from '../../constants';

export const PrimaryBtn = ({text, onPress}) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledText fontSize="16px" fontWeight="bold" color={Colors.blue}>
        {text}
      </StyledText>
    </StyledTouchableOpacity>
  );
};
