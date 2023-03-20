import { NativeModules, Platform } from 'react-native';
import { parseString } from 'react-native-xml2js';

const { NavigationBarColor } = NativeModules;

// Костыльное но на скоркую руку решение странного бага модуля,
// у которого просто не экспортировалась часть методов
// Поскольку приложение демонстрационное, нет смысла с этим возиться
const hideNavigationBar = () => {
  if (Platform.OS === 'android') {
    return NavigationBarColor.hideNavigationBar();
  } else {
    return false;
  }
};
const showNavigationBar = () => {
  if (Platform.OS === 'android') {
    NavigationBarColor.showNavigationBar();
  } else {
    return false;
  }
};

export { hideNavigationBar, showNavigationBar };

export const parseXMLString = (
  xmlString,
  options = { trim: true, normalize: true },
) =>
  new Promise((res, rej) => {
    parseString(xmlString, options, (err, result) => {
      if (!err) {
        res(result);
      } else {
        rej(err);
      }
    });
  });
