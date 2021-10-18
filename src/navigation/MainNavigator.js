import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DrawerNavigator} from './DrawerNavigator';
import {Colors} from '../constants';
import {StyledSafeAreaView} from '../common-styled-components';

export const MainNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StyledSafeAreaView flex={1} bgColor={Colors.lightGrey}>
          <DrawerNavigator />
        </StyledSafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
