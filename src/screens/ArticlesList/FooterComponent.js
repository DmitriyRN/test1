import React from 'react';
import {Text, View} from 'react-native';

import {strings} from '../../constants';
import {styles} from './styles';

export const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.mainBlock}>
        <Text style={styles.footerText}>{strings.pullTrigger}</Text>
      </View>
    </View>
  );
};
