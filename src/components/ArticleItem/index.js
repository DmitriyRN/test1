import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../constants';
import {
  StyledArticleContainer,
  ImageBlock,
  DescriptionBlock,
  PaddingText,
  SizeText,
  StyledCountBlock,
  CountWrapper,
  ArrowBlock,
} from './styled-components';
import {
  StyledRowContainer,
  StyledImage,
  StyledText,
} from '../../common-styled-components';

export const ArticleItem = ({
  articleNumber,
  color,
  count,
  description,
  size,
  image,
}) => {
  return (
    <StyledArticleContainer as={TouchableOpacity}>
      <StyledRowContainer>
        <ImageBlock>
          <StyledImage source={image} />
        </ImageBlock>

        <DescriptionBlock>
          <PaddingText>{articleNumber}</PaddingText>
          <StyledRowContainer>
            <PaddingText>{color}</PaddingText>
            <SizeText>{size}</SizeText>
          </StyledRowContainer>
          <PaddingText color={Colors.greyForText}>{description}</PaddingText>
        </DescriptionBlock>
      </StyledRowContainer>

      <StyledCountBlock>
        <CountWrapper>
          <StyledText color={Colors.white}>{count}</StyledText>
        </CountWrapper>
        <ArrowBlock>
          <Icon
            name="keyboard-arrow-right"
            size={22}
            color={Colors.greyForText}
          />
        </ArrowBlock>
      </StyledCountBlock>
    </StyledArticleContainer>
  );
};
