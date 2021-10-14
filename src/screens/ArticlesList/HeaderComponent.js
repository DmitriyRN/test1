import React from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Colors, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';

export const HeaderComponent = () => {
  return (
    <StyledBox borderWidth="2px" borderColor={Colors.separatorGrey}>
      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="10px"
        paddingRight="10px"
        paddingBottom="10px"
        paddingLeft="10px"
        bgColor={Colors.lightGrey}>
        <StyledBox flexDirection="row" alignItems="center">
          <AwesomeIcon name="box" size={20} color={Colors.darkGrey} />
          <StyledText
            padding="4px"
            fontSize="12px"
            fontWeight="bold"
            color={Colors.greyForText}>
            259870984802938401928374012
          </StyledText>
        </StyledBox>

        <StyledBox flexDirection="row" alignItems="center">
          <Ionicon name="pricetag" size={25} color={Colors.darkGrey} />
          <StyledText
            padding="4px"
            fontSize="12px"
            fontWeight="bold"
            color={Colors.greyForText}>
            9
          </StyledText>
        </StyledBox>
      </StyledBox>

      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="5px"
        paddingRight="70px">
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}>
          {strings.article}
        </StyledText>
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}>
          {strings.act}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
