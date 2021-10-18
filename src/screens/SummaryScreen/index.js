import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';

import {
  ArticleItem,
  SecondaryHeader,
  FlatListFooterComponent,
} from '../../components';
import {mockArticles, mockCartons} from '../../mockdata';
import {
  StyledBox,
  StyledText,
  StyledTouchableOpacity,
} from '../../common-styled-components';
import {Colors, strings} from '../../constants';

export const SummaryScreen = () => {
  const [currentList, setCurrentList] = useState(strings.cartons);

  const handleSegmentControl = index => {
    index === 0
      ? setCurrentList(strings.cartons)
      : setCurrentList(strings.articles);
  };

  const renderItem = ({item}) => <ArticleItem {...item} />;

  const keyExtractor = ({id}) => id;

  const QuickActions = (index, qaItem) => {
    return (
      <StyledBox flex={1} flexDirection="row" justifyContent="flex-end">
        <StyledBox
          width="80px"
          alignItems="center"
          justifyContent="center"
          bgColor={Colors.red}
        >
          <StyledTouchableOpacity
            onPress={() => console.log('delete: ' + qaItem.id)}
          >
            <StyledText fontWeight="bold" color={Colors.white} fontSize="16px">
              {strings.delete}
            </StyledText>
          </StyledTouchableOpacity>
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
        handleSegmentControl={handleSegmentControl}
      />
      {currentList === strings.articles ? (
        <SwipeableFlatList
          data={mockArticles}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          maxSwipeDistance={80}
          shouldBounceOnMount={true}
          renderQuickActions={({index, item}) => QuickActions(index, item)}
        />
      ) : (
        <SwipeableFlatList
          data={mockCartons}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={() => (
            <FlatListFooterComponent text={strings.pullTriggerScanBarcode} />
          )}
          ListFooterComponentStyle={styles.footerComponent}
          contentContainerStyle={styles.contentContainer}
          maxSwipeDistance={80}
          shouldBounceOnMount={true}
          renderQuickActions={({index, item}) => QuickActions(index, item)}
        />
      )}
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
