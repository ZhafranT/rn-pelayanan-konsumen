import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './redux';

import { Home, Login, Register, News, Spalsh, Uupk, Pengaduan, Status, Profile } from './screens';
import { BottomNavigator } from './components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Navi = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false }} tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Login" component={Login} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

const App = () => {
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
          <Stack.Screen name="Navi" component={Navi} />
          <Stack.Screen name="Register" component={Register} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Pengaduan" component={Pengaduan} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Uupk" component={Uupk} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
