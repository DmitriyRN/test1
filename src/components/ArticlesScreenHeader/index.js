import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {Colors, strings} from '../../constants';
import {styles} from './styles.js';

export const ArticlesScreenHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsBlock}>
        <View style={styles.iconWithTextBlock}>
          <Ionicon name="bluetooth" size={50} color={Colors.darkGrey} />
          <Text style={styles.iconText}>100%</Text>
        </View>
        <Icon name="wifi-tethering" size={50} color={Colors.darkGrey} />
        <Ionicon name="cloud-done-outline" size={50} color={Colors.darkGrey} />
      </View>
      <View style={styles.buttonsBlock}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>{strings.cancel}</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>{strings.articlesInCarton}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>{strings.confirm}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
