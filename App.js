import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './redux';

import { Home, Login, Register, News, Spalsh, Uupk, Pengaduan } from './screens';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Spalsh" component={Spalsh} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Pengaduan" component={Pengaduan} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Uupk" component={Uupk} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
