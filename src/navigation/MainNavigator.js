import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import routeNames from ':global/routeNames';
import colors from ':global/colors';

import NewsList from ':scenes/NewsList';
import NewsDetails from ':scenes/NewsDetails';

const MainStack = createStackNavigator();
const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName={routeNames.newsList}
    screenOptions={{
      headerTitleStyle: {
        color: colors.headerTitleTextColor,
      },
      headerTitleAlign: 'center',
      headerStyle: {
        borderBottomWidth: 1,
        backgroundColor: colors.headerBackgroundColor,
      },
    }}>
    <MainStack.Screen
      name={routeNames.newsList}
      component={NewsList}
      options={{
        headerShown: false,
        title: 'Новости',
        headerTruncatedBackTitle: 'Н.',
      }}
    />
    <MainStack.Screen
      name={routeNames.newsDetails}
      component={NewsDetails}
      options={({ route }) => {
        console.log('route: ', route);
        return {
          headerBackTitleVisible: false,
          title: `${route.params.news.title}`,
        };
      }}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
