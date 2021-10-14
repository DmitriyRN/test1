import React from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Colors, strings} from '../../constants';
import {
  StyledBorderedContainer,
  StyledRowContainer,
} from '../../common-styled-components';
import {
  IconsBlock,
  IconText,
  TitlesBlock,
  TitleText,
} from './styled-components';

export const HeaderComponent = () => {
  return (
    <StyledBorderedContainer>
      <IconsBlock>
        <StyledRowContainer>
          <AwesomeIcon name="box" size={20} color={Colors.darkGrey} />
          <IconText>259870984802938401928374012</IconText>
        </StyledRowContainer>
        <StyledRowContainer>
          <Ionicon name="pricetag" size={25} color={Colors.darkGrey} />
          <IconText>9</IconText>
        </StyledRowContainer>
      </IconsBlock>
      <TitlesBlock>
        <TitleText>{strings.article}</TitleText>
        <TitleText>{strings.act}</TitleText>
      </TitlesBlock>
    </StyledBorderedContainer>
  );
};
