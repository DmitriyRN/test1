import {Text, View} from 'react-native';
import {styles} from './styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {Colors, strings} from '../../constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import React from 'react';

export const HeaderComponent = () => {
  return (
    <View style={styles.headerComponent}>
      <View style={styles.headerComponentIconsBlock}>
        <View style={styles.iconWithTextBlock}>
          <AwesomeIcon name="box" size={20} color={Colors.darkGrey} />
          <Text style={styles.headerComponentIconText}>
            259870984802938401928374012
          </Text>
        </View>
        <View style={styles.iconWithTextBlock}>
          <Ionicon name="pricetag" size={25} color={Colors.darkGrey} />
          <Text style={styles.headerComponentIconText}>9</Text>
        </View>
      </View>

      <View style={styles.headerComponentTitlesBlock}>
        <Text style={styles.headerComponentTitle}>{strings.article}</Text>
        <Text style={styles.headerComponentTitle}>{strings.act}</Text>
      </View>
    </View>
  );
};
