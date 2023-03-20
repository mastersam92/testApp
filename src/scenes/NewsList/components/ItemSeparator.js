import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from ':global/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.newsSeparatorColor,
  },
});

const ItemSeparator = () => <View style={styles.container} />;

export default ItemSeparator;
