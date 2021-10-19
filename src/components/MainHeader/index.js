import React from 'react';

import {Colors, routes, strings} from '../../constants';
import {StyledBox, StyledText} from '../../common-styled-components';
import Bluetooth from '../../assets/svg/bluetooth.svg';
import Wifi from '../../assets/svg/wifi.svg';
import Cloud from '../../assets/svg/cloud.svg';
import {PrimaryBtn} from '../PrimaryBtn';
import Box from '../../assets/svg/box.svg';
import Label from '../../assets/svg/label.svg';

export const MainHeader = ({
  title = '',
  onPressTitle = () => {},
  boxNumber = '',
  articlesCount = '',
  address = '',
  boxCount = '',
}) => {
  return (
    <StyledBox
      paddingTop="45px"
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
      {title === routes.articlesInCarton ? (
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
        paddingTop="12px"
        paddingRight="3px"
        paddingBottom="12px"
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
        {title === routes.articlesInCarton ? (
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

      {title === routes.articlesInCarton ? (
        <StyledBox
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingTop="10px"
          paddingRight="10px"
          paddingBottom="10px"
          paddingLeft="10px"
          bgColor={Colors.separatorGrey}
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
          bgColor={Colors.separatorGrey}
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
    </StyledBox>
  );
};
