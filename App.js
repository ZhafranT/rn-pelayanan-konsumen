import React, { useState, useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './redux';

import { Akses, Home, Login, Register, News, Spalsh, Uupk, Pengaduan, Status, Profile, Help, NewsDetail } from './screens';
import { BottomNavigator } from './components';

import { checklogin } from './utils';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Navinon = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false }} tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

const Navilogin = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false }} tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [islogin, setIslogin] = useState(null);

  useEffect(() => {
    loginmethod();
  }, [islogin]);

  const loginmethod = async () => {
    console.log('App | checklogin', await checklogin());
    setIslogin(await checklogin());
  };

  const [loaded] = useFonts({
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Spalsh">
          <Stack.Screen name="Spalsh" component={Spalsh} />
          {/* {islogin == null || islogin === 'false' ? <Stack.Screen name="Navinon" component={Navinon} /> : <Stack.Screen name="Navilogin" component={Navilogin} />} */}
          <Stack.Screen name="Navinon" component={Navinon} />
          <Stack.Screen name="Navilogin" component={Navilogin} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Pengaduan" component={Pengaduan} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="NewsDetail" component={NewsDetail} />
          <Stack.Screen name="Uupk" component={Uupk} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Akses" component={Akses} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
