import React, {useState} from 'react';

import {StyledText, StyledBox} from '../../common-styled-components';
import {Colors, strings} from '../../constants';
import Box from '../../assets/svg/box.svg';
import Label from '../../assets/svg/label.svg';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export const SecondaryHeader = ({
  boxNumber,
  articlesCount = 0,
  boxCount = 0,
  address = '',
  handleSegmentControl,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <StyledBox borderWidth="2px" borderColor={Colors.separatorGrey}>
      {boxNumber ? (
        <StyledBox
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingTop="10px"
          paddingRight="10px"
          paddingBottom="10px"
          paddingLeft="10px"
          bgColor={Colors.lightGrey}
        >
          <StyledBox flexDirection="row" alignItems="center">
            <Box width={20} height={20} color={Colors.darkGrey} />
            <StyledText
              padding="4px"
              fontSize="12px"
              fontWeight="bold"
              color={Colors.greyForText}
            >
              {boxNumber}
            </StyledText>
          </StyledBox>

          <StyledBox flexDirection="row" alignItems="center">
            <Label width={20} height={20} color={Colors.darkGrey} />
            <StyledText
              padding="4px"
              fontSize="12px"
              fontWeight="bold"
              color={Colors.greyForText}
            >
              {articlesCount}
            </StyledText>
          </StyledBox>
        </StyledBox>
      ) : (
        <StyledBox
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingTop="10px"
          paddingRight="10px"
          paddingBottom="10px"
          paddingLeft="10px"
          bgColor={Colors.lightGrey}
        >
          <StyledText
            padding="4px"
            fontSize="14px"
            fontWeight="bold"
            color={Colors.greyForText}
            textTransform="uppercase"
          >
            {address}
          </StyledText>
          <StyledBox
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledBox
              flexDirection="row"
              alignItems="center"
              paddingRight="15px"
            >
              <Box width={20} height={20} color={Colors.darkGrey} />
              <StyledText
                padding="4px"
                fontSize="12px"
                fontWeight="bold"
                color={Colors.greyForText}
              >
                {boxCount}
              </StyledText>
            </StyledBox>
            <StyledBox flexDirection="row" alignItems="center">
              <Label width={20} height={20} color={Colors.darkGrey} />
              <StyledText
                padding="4px"
                fontSize="12px"
                fontWeight="bold"
                color={Colors.greyForText}
              >
                {articlesCount}
              </StyledText>
            </StyledBox>
          </StyledBox>
        </StyledBox>
      )}

      {!boxNumber && (
        <SegmentedControl
          values={[strings.cartons, strings.articles]}
          selectedIndex={selectedIndex}
          onChange={event => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            handleSegmentControl(event.nativeEvent.selectedSegmentIndex);
          }}
        />
      )}

      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="5px"
        paddingRight="70px"
      >
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}
        >
          {boxNumber
            ? strings.article
            : selectedIndex == 0
            ? strings.cartonNo
            : strings.articleNo}
        </StyledText>
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}
        >
          {boxNumber ? strings.act : strings.actWithDot}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
