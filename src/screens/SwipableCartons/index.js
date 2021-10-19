import React, {useState, useLayoutEffect} from 'react';
import {
  StyledBox,
  StyledText,
  StyledTouchableOpacity,
} from '../../common-styled-components';
import {Colors, strings} from '../../constants';
import SwipeableFlatList from 'react-native-swipeable-list';
import {
  ArticleItem,
  FlatListFooterComponent,
  SecondaryHeader,
} from '../../components';
import {StyleSheet} from 'react-native';
import {mockCartons} from '../../mockdata';

export const SwipableCartons = props => {
  const {navigation, route} = props;
  const [cartons, setCartons] = useState(mockCartons);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     articlesCount: 9,
  //     boxCount: 1,
  //     address: strings.addressLasVegas,
  //   });
  // }, [navigation]);

  const deleteItem = id => {
    setCartons(cartons.filter(item => item.id !== id));
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
      <SecondaryHeader routeName={route.name} />
      <SwipeableFlatList
        data={cartons}
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
