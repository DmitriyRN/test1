import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './styles.js';
import {ArticlesScreenHeader, ArticleItem} from '../../components';
import {mockArticles} from '../../mockdata/mockArticles';
import {HeaderComponent} from './HeaderComponent';
import {FooterComponent} from './FooterComponent';

export const ArticlesList = () => {
  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  return (
    <View style={styles.container}>
      <ArticlesScreenHeader />
      <FlatList
        data={mockArticles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        ListFooterComponentStyle={styles.footerComponent}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
