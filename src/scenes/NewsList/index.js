import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FlatList, View, StatusBar, Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';
import RNBootSplash from 'react-native-bootsplash';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { hideNavigationBar, showNavigationBar } from ':global/utils';

import { getNews } from ':module_news/actionCreators';
import routeNames from ':global/routeNames';
import Refresher from ':components/Refresher';
import StartupAnim from ':assets/lottie/capital-bee.json';

import NewsItem from './components/NewsItem';
import ItemSeparator from './components/ItemSeparator';

import styles from './styles';

const NewsList = () => {
  const { navigate, setOptions } = useNavigation();
  const dispatch = useDispatch();
  const { isLoading, newsList } = useSelector(({ news }) => ({
    isLoading: news.isLoading,
    newsList: news.newsList,
  }));

  const [isStartupProccess, setIsStartupProccess] = useState(true);

  const updateNewsList = useCallback(() => dispatch(getNews()), [dispatch]);
  const ref = useRef(null);
  const progress = useRef(new Animated.Value(0));
  const opacity = useRef(new Animated.Value(1));

  useEffect(() => {
    if (isStartupProccess) {
      hideNavigationBar();
    } else {
      showNavigationBar();
    }
  }, [isStartupProccess]);

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: false });

      if (!progress.current) {
        return null;
      }

      Animated.sequence([
        Animated.timing(progress.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 6000,
          easing: Easing.ease,
        }),
        Animated.timing(opacity.current, {
          delay: 250,
          toValue: 0,
          useNativeDriver: true,
          duration: 250,
          easing: Easing.in(Easing.ease),
        }),
      ]).start(({ finished }) => {
        // Когда запускается несколько анимаций, то этот вызов может происходить по завершению каждой из них
        // И только когда все анимации завершатся вызов произойдёт с finished === true
        if (finished) {
          setOptions({
            headerShown: true,
          });
          setIsStartupProccess(false);
        }
      });
    }, 200);
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isStartupProccess ? 'light-content' : 'dark-content'}
        backgroundColor="#FFFFFF"
        animated={true}
        hidden={isStartupProccess}
        translucent={false}
      />
      {!isStartupProccess && (
        <FlatList
          refreshControl={
            <Refresher refreshing={isLoading} onRefresh={updateNewsList} />
          }
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={<ItemSeparator />}
          keyExtractor={(item) => `${item.title}`}
          data={newsList}
          renderItem={({ item: news }) => (
            <NewsItem
              onPress={() => navigate(routeNames.newsDetails, { news })}>
              {news}
            </NewsItem>
          )}
        />
      )}
      {isStartupProccess && (
        <Animated.View
          style={[styles.animationContainer, { opacity: opacity.current }]}>
          <Lottie
            loop
            ref={ref}
            resizeMode="contain"
            progress={progress.current}
            source={StartupAnim}
            style={styles.animation}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default NewsList;
