import React, {useState} from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import {Colors, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';
import Box from '../../assets/svg/box.svg';
import Label from '../../assets/svg/label.svg';

export const HeaderComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            259870984802938401928374012
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
            9
          </StyledText>
        </StyledBox>
      </StyledBox>

      <SegmentedControl
        values={['Cartons', 'Articles']}
        selectedIndex={selectedIndex}
        onChange={event =>
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
        }
      />

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
          {strings.article}
        </StyledText>
        <StyledText
          textTransform="uppercase"
          padding="12px"
          color={Colors.greyForText}
        >
          {strings.act}
        </StyledText>
      </StyledBox>
    </StyledBox>
  );
};
