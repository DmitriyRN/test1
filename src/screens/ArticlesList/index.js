import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';

import {SecondaryHeader, ArticleItem} from '../../components';
import {mockArticles} from '../../mockdata';
import {StyledBox, StyledFlatlist} from '../../common-styled-components';
import {Colors, strings} from '../../constants';
import {FlatListFooterComponent} from '../../components';

export const ArticlesList = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      boxNumber: '25003900020001902003',
      articlesCount: 9,
    });
  }, [navigation]);

  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  return (
    <StyledBox justifyContent="center" bgColor={Colors.white} flex={1}>
      <SecondaryHeader routeName={route.name} />
      <StyledFlatlist
        data={mockArticles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={() => (
          <FlatListFooterComponent text={strings.pullTrigger} />
        )}
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
