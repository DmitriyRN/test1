import React from 'react';
import {Pressable} from 'react-native';

import {Colors} from '../../constants';
import {
  StyledBox,
  StyledText,
  StyledImage,
} from '../../common-styled-components';
import ArrowRight from '../../assets/svg/arrow-right.svg';

export const ArticleItem = ({
  articleNumber,
  color,
  count,
  description,
  size,
  image,
}) => {
  return (
    <StyledBox
      as={Pressable}
      flexDirection="row"
      alignItems="center"
      paddingTop="3px"
      paddingRight="3px"
      paddingBottom="3px"
      paddingLeft="3px"
      borderBottomColor={Colors.separatorGrey}
      borderBottomWidth="2px"
      bgColor={Colors.white}
    >
      <StyledBox flexDirection="row" alignItems="center">
        <StyledBox
          paddingTop="10px"
          paddingRight="10px"
          paddingBottom="10px"
          paddingLeft="10px"
          boxShadow={`0 2px 0 ${Colors.lightGrey}`}
        >
          <StyledImage source={image} width="70px" height="70px" />
        </StyledBox>

        <StyledBox justifyContent="space-evenly">
          <StyledText padding="3px" color={Colors.black}>
            {articleNumber}
          </StyledText>
          <StyledBox flexDirection="row" alignItems="center">
            <StyledText padding="3px" color={Colors.black}>
              {color}
            </StyledText>
            <StyledText padding="3px" paddingLeft="25px" color={Colors.black}>
              {size}
            </StyledText>
          </StyledBox>
          <StyledText padding="3px" color={Colors.greyForText}>
            {description}
          </StyledText>
        </StyledBox>
      </StyledBox>

      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="50%"
      >
        <StyledBox
          backgroundColor={Colors.green}
          width="50%"
          borderRadius="10px"
          alignItems="center"
        >
          <StyledText color={Colors.white}>{count}</StyledText>
        </StyledBox>

        <StyledBox
          paddingTop="20px"
          paddingRight="20px"
          paddingBottom="20px"
          paddingLeft="20px"
        >
          <ArrowRight width={22} height={22} color={Colors.greyForText} />
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
};
