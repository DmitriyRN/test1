import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Colors, strings} from '../../constants';
import {
  StyledBox,
  StyledText,
  StyledTouchableOpacity,
} from '../../common-styled-components';

export const ArticlesScreenHeader = () => {
  return (
    <StyledBox
      paddingTop="15px"
      justifyContent="center"
      backgroundColor={Colors.white}>
      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="5px"
        paddingRight="5px">
        <StyledBox flexDirection="row" alignItems="center" width="60px">
          <Ionicon name="bluetooth" size={50} color={Colors.darkGrey} />
          <StyledText fontSize="20px">100%</StyledText>
        </StyledBox>
        <Icon name="wifi-tethering" size={50} color={Colors.darkGrey} />
        <Ionicon name="cloud-done-outline" size={50} color={Colors.darkGrey} />
      </StyledBox>

      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="20px"
        paddingRight="3px"
        paddingBottom="20px"
        paddingLeft="3px">
        <StyledTouchableOpacity>
          <StyledText fontSize="16px" fontWeight="bold" color={Colors.blue}>
            {strings.cancel}
          </StyledText>
        </StyledTouchableOpacity>
        <StyledText fontSize="16px" fontWeight="bold" color={Colors.darkGrey}>
          {strings.articlesInCarton}
        </StyledText>
        <StyledTouchableOpacity>
          <StyledText fontSize="16px" fontWeight="bold" color={Colors.blue}>
            {strings.confirm}
          </StyledText>
        </StyledTouchableOpacity>
      </StyledBox>
    </StyledBox>
  );
};
