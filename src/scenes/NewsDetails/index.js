import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import Loader from './components/Loader';

import styles from './styles';

const NewsDetails = () => {
  const route = useRoute();
  const { news } = route.params;
  const { uri } = news;

  return (
    <WebView
      startInLoadingState
      // Исправление бага для яблока, когда любой ролик на сайте
      // вдруг может самовоспроизводиться, причём, полноэкранно
      allowsInlineMediaPlayback
      setBuiltInZoomControls={false}
      bounces={false}
      originWhitelist={['*']}
      style={styles.container}
      source={{ uri }}
      renderLoading={() => <Loader />}
    />
  );
};

export default NewsDetails;
