import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ArticlesList, LoginScreen} from '../screens';
import {MainHeader} from '../components';
import {routes} from '../constants';
import {SummaryTabNavigator} from './SummaryTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => (
          <MainHeader
            title={route.name}
            onPressTitle={() => navigation.toggleDrawer()}
            boxNumber={options.boxNumber}
            articlesCount={options.articlesCount}
            address={options.address}
            boxCount={options.boxCount}
          />
        ),
      }}
    >
      <Drawer.Screen
        name={routes.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen name={routes.summary} component={SummaryTabNavigator} />
      <Drawer.Screen name={routes.articlesInCarton} component={ArticlesList} />
    </Drawer.Navigator>
  );
};
