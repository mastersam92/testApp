import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

import StartupAnim from ':assets/lottie/capital-bee.json';

import colors from ':global/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.screenBackgroundColor,
  },
  animation: {
    height: 100,
    width: 100,
  },
});

const Loader = () => (
  <View style={styles.container}>
    <Lottie
      autoPlay
      loop
      resizeMode="contain"
      source={StartupAnim}
      style={styles.animation}
    />
  </View>
);

export default Loader;
