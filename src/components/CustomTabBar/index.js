import {TouchableOpacity} from 'react-native';
import * as React from 'react';
import {StyledBox, StyledText} from '../../common-styled-components';
import {Colors} from '../../constants';

export const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <StyledBox
      flexDirection="row"
      bgColor={Colors.lightGrey}
      height="30px"
      justifyContent="center"
      alignItems="center"
    >
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <StyledBox
            as={TouchableOpacity}
            onPress={onPress}
            flex={1}
            alignItems="center"
            bgColor={isFocused && Colors.white}
            borderRadius={isFocused && '8px'}
            borderColor={isFocused && Colors.separatorGrey}
            borderWidth={isFocused && '1px'}
            paddingTop={isFocused && '6px'}
            paddingBottom={isFocused && '6px'}
            key={index}
          >
            <StyledText color={Colors.black} fontWeight="bold">
              {label}
            </StyledText>
          </StyledBox>
        );
      })}
    </StyledBox>
  );
};
