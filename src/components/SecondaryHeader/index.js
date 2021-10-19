import React from 'react';

import {StyledText, StyledBox} from '../../common-styled-components';
import {Colors, routes, strings} from '../../constants';

export const SecondaryHeader = ({routeName}) => {
  return (
    <StyledBox borderWidth="2px" borderColor={Colors.separatorGrey}>
      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="5px"
        paddingRight="70px"
        height="48px"
      >
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}
        >
          {routeName === routes.articlesInCarton
            ? strings.article
            : routeName === routes.cartons
            ? strings.cartonNo
            : strings.articleNo}
        </StyledText>
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}
        >
          {routeName === routes.articlesInCarton
            ? strings.act
            : strings.actWithDot}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
