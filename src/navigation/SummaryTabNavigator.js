import React, {useLayoutEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {SwipableArticles, SwipableCartons} from '../screens';
import {routes, strings} from '../constants';
import {CustomTabBar} from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export const SummaryTabNavigator = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      articlesCount: 9,
      boxCount: 1,
      address: strings.addressLasVegas,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
      tabBar={(props): React.ReactNode => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={routes.cartons} component={SwipableCartons} />
      <Tab.Screen name={routes.articles} component={SwipableArticles} />
    </Tab.Navigator>
  );
};
