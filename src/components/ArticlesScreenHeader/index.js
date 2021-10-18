import React from 'react';

import {Colors, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';
import Bluetooth from '../../assets/svg/bluetooth.svg';
import Wifi from '../../assets/svg/wifi.svg';
import Cloud from '../../assets/svg/cloud.svg';
import {PrimaryBtn} from '../PrimaryBtn';

export const ArticlesScreenHeader = ({title = ''}) => {
  return (
    <StyledBox
      paddingTop="15px"
      justifyContent="center"
      backgroundColor={Colors.white}
    >
      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="5px"
        paddingRight="15px"
      >
        <StyledBox flexDirection="row" alignItems="center" width="60px">
          <Bluetooth width={50} height={50} color={Colors.darkGrey} />
          <StyledText fontSize="20px">100%</StyledText>
        </StyledBox>
        <Wifi width={50} height={50} color={Colors.darkGrey} />
        <Cloud width={50} height={50} color={Colors.darkGrey} />
      </StyledBox>

      <StyledBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop="20px"
        paddingRight="3px"
        paddingBottom="20px"
        paddingLeft="3px"
      >
        <PrimaryBtn
          text={strings.cancel}
          onPress={() => console.log('cancel')}
        />
        <StyledText fontSize="16px" fontWeight="bold" color={Colors.darkGrey}>
          {title}
        </StyledText>
        <PrimaryBtn
          text={strings.confirm}
          onPress={() => console.log('confirm')}
        />
      </StyledBox>
    </StyledBox>
  );
};
