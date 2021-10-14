import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {ArticlesScreenHeader, ArticleItem} from '../../components';
import {mockArticles} from '../../mockdata/mockArticles';
import {HeaderComponent} from './HeaderComponent';
import {FooterComponent} from './FooterComponent';
import {StyledFlexContainer} from './styled-components';

export const ArticlesList = () => {
  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  return (
    <StyledFlexContainer>
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
    </StyledFlexContainer>
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
});
