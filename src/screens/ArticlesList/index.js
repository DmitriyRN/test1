import React from 'react';
import {StyleSheet} from 'react-native';

import {ArticlesScreenHeader, ArticleItem} from '../../components';
import {mockArticles} from '../../mockdata/mockArticles';
import {HeaderComponent} from './HeaderComponent';
import {FooterComponent} from './FooterComponent';
import {StyledBox, StyledFlatlist} from '../../common-styled-components';
import {Colors} from '../../constants';

export const ArticlesList = () => {
  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  return (
    <StyledBox justifyContent="center" bgColor={Colors.white} flex={1}>
      <StyledFlatlist
        data={mockArticles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        ListFooterComponentStyle={styles.footerComponent}
        contentContainerStyle={styles.contentContainer}
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
});
