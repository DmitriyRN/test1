import React, {useState} from 'react';

import {
  StyledBox,
  StyledText,
  StyledTouchableOpacity,
} from '../../common-styled-components';
import {Colors, strings} from '../../constants';
import SwipeableFlatList from 'react-native-swipeable-list';
import {mockArticles} from '../../mockdata';
import {ArticleItem, SecondaryHeader} from '../../components';

export const SwipableArticles = ({route}) => {
  const [articles, setArticles] = useState(mockArticles);

  const deleteItem = id => {
    setArticles(articles.filter(item => item.id !== id));
  };

  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  const QuickActions = (index, qaItem) => {
    return (
      <StyledBox
        flex={1}
        flexDirection="row"
        justifyContent="flex-end"
        as={StyledTouchableOpacity}
        onPress={() => deleteItem(qaItem.id)}
      >
        <StyledBox
          width="80px"
          alignItems="center"
          justifyContent="center"
          bgColor={Colors.red}
        >
          <StyledText fontWeight="bold" color={Colors.white} fontSize="16px">
            {strings.delete}
          </StyledText>
        </StyledBox>
      </StyledBox>
    );
  };

  return (
    <StyledBox justifyContent="center" bgColor={Colors.white} flex={1}>
      <SecondaryHeader
        articlesCount={9}
        boxCount={1}
        address={strings.addressLasVegas}
        routeName={route.name}
      />
      <SwipeableFlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxSwipeDistance={80}
        shouldBounceOnMount={true}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
      />
    </StyledBox>
  );
};
