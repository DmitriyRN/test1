import React from 'react';
import {View, Text} from 'react-native';

export const InputRequirementComponent = ({touched, value, isMatched}) => {
  // console.log('@@@@@@@', isMatched);
  // if (valueType === 'email') {
  //   return (
  //     <>
  //       {!touched && value === '' && (
  //         <View>
  //           <Text>Require email</Text>
  //         </View>
  //       )}
  //       {touched && value === '' && (
  //         <View>
  //           <Text>Require email touched</Text>
  //         </View>
  //       )}
  //       {touched && value.match(/^.*(?=.{7,}).*$/) && (
  //         <View>
  //           <Text></Text>
  //         </View>
  //       )}
  //     </>
  //   );
  // }

  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};
