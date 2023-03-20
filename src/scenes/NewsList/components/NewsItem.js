import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import colors from ':global/colors';
import { scale, scaleByVertical } from ':global/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleByVertical(15),
  },
  headerWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: scale(16),
    fontWeight: '500',
    color: colors.screenMainTextColor,
  },

  bodyWrapper: {
    flex: 1,
    paddingTop: scaleByVertical(5),
    flexDirection: 'row',
  },
  imageWrapper: {
    justifyContent: 'center',
  },
  image: {
    width: scaleByVertical(50),
    height: scaleByVertical(50),
    borderRadius: scaleByVertical(5),
  },

  description: {
    flex: 1,
    fontSize: scale(14),
    color: colors.screenMainTextColor,
  },
  imageNewsDescription: {
    paddingLeft: scale(10),
  },
});

const NewsItem = ({
  children: { title, description, image },
  style,
  onPress,
}) => {
  const isNewsHaveImage = !!image;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.bodyWrapper}>
        {isNewsHaveImage && (
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{ uri: image }}
              resizeMode="cover"
            />
          </View>
        )}
        <Text
          style={[
            styles.description,
            isNewsHaveImage && styles.imageNewsDescription,
          ]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
