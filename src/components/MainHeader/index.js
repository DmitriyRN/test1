import React from 'react';

import {Colors, routes, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';
import Bluetooth from '../../assets/svg/bluetooth.svg';
import Wifi from '../../assets/svg/wifi.svg';
import Cloud from '../../assets/svg/cloud.svg';
import {PrimaryBtn} from '../PrimaryBtn';

export const MainHeader = ({title = '', onPressTitle = () => {}}) => {
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
      {title === routes.articles ? (
        <StyledBox
          marginTop="5px"
          borderBottomColor={Colors.white}
          borderBottomWidth="2px"
        />
      ) : (
        <StyledBox
          marginTop="5px"
          borderBottomColor={Colors.separatorGrey}
          borderBottomWidth="2px"
        />
      )}
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
        <StyledText
          fontSize="16px"
          fontWeight="bold"
          color={Colors.darkGrey}
          onPress={() => onPressTitle()}
        >
          {title}
        </StyledText>
        {title == routes.articles ? (
          <PrimaryBtn
            text={strings.confirm}
            onPress={() => console.log(strings.confirm)}
          />
        ) : (
          <PrimaryBtn
            text={strings.prepare}
            onPress={() => console.log(strings.prepare)}
          />
        )}
      </StyledBox>
    </StyledBox>
  );
};
