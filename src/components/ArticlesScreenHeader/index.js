import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Colors, strings} from '../../constants';
import {
  StyledScreenContainer,
  IconsBlock,
  IconWithTextBlock,
  IconText,
  ButtonsBlock,
  ButtonText,
  TitleText,
} from './styled-components';

export const ArticlesScreenHeader = () => {
  return (
    <StyledScreenContainer>
      <IconsBlock>
        <IconWithTextBlock>
          <Ionicon name="bluetooth" size={50} color={Colors.darkGrey} />
          <IconText>100%</IconText>
        </IconWithTextBlock>
        <Icon name="wifi-tethering" size={50} color={Colors.darkGrey} />
        <Ionicon name="cloud-done-outline" size={50} color={Colors.darkGrey} />
      </IconsBlock>
      <ButtonsBlock>
        <TouchableOpacity>
          <ButtonText>{strings.cancel}</ButtonText>
        </TouchableOpacity>
        <TitleText>{strings.articlesInCarton}</TitleText>
        <TouchableOpacity>
          <ButtonText>{strings.confirm}</ButtonText>
        </TouchableOpacity>
      </ButtonsBlock>
    </StyledScreenContainer>
  );
};
