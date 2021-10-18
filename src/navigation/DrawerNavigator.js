import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ArticlesList, SummaryScreen} from '../screens';
import {MainHeader} from '../components';
import {routes} from '../constants';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => (
          <MainHeader
            title={route.name}
            onPressTitle={() => navigation.toggleDrawer()}
          />
        ),
      }}
    >
      <Drawer.Screen name={routes.articles} component={ArticlesList} />
      <Drawer.Screen name={routes.summary} component={SummaryScreen} />
    </Drawer.Navigator>
  );
};
