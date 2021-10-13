import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles.js';
import {Colors} from '../../constants';

export const ArticleItem = ({
  articleNumber,
  color,
  count,
  description,
  size,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.imageBlock}>
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.descriptionBlock}>
          <Text style={styles.commonText}>{articleNumber}</Text>
          <View style={styles.colorSizeBlock}>
            <Text style={styles.commonText}>{color}</Text>
            <Text style={styles.sizeText}>{size}</Text>
          </View>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>

      <View style={styles.countBlock}>
        <View style={styles.countWrapper}>
          <Text style={styles.countText}>{count}</Text>
        </View>
        <View style={styles.arrowBlock}>
          <Icon
            name="keyboard-arrow-right"
            size={22}
            color={Colors.greyForText}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
