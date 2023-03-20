import { StyleSheet } from 'react-native';

import { scale } from ':global/layout';

import colors from ':global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  contentContainer: {
    paddingHorizontal: scale(16),
  },
  animationContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: { height: 100, width: 100 },
});
