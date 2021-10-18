import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';

import {ArticlesScreenHeader, ArticleItem} from '../../components';
import {mockArticles} from '../../mockdata/mockArticles';
import {HeaderComponent} from '../ArticlesList/HeaderComponent';
import {FooterComponent} from '../ArticlesList/FooterComponent';
import {
  StyledBox,
  StyledFlatlist,
  StyledText,
} from '../../common-styled-components';
import {Colors, strings} from '../../constants';

export const SummaryScreen = () => {
  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={styles.button}>
          <Pressable onPress={() => console.log('delete: ' + qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <StyledBox justifyContent="center" bgColor={Colors.white} flex={1}>
      <ArticlesScreenHeader title={strings.summary} />
      <SwipeableFlatList
        data={mockArticles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        ListFooterComponentStyle={styles.footerComponent}
        contentContainerStyle={styles.contentContainer}
        maxSwipeDistance={80}
        shouldBounceOnMount={true}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
      />
    </StyledBox>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  footerComponent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  button3Text: {
    color: Colors.white,
  },
});
