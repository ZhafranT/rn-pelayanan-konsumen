import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// assset
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

import { FocusStatusBar, IconBack, RectButton, RegisHere, FormLogin } from '../components';
import { setFormLogin } from '../redux';

const Login = () => {
  const LoginReducer = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onChangeLogin = (value, input) => {
    dispatch(setFormLogin(input, value));
  };

  const sendData = () => {
    console.log('data login : ', LoginReducer.formLogin);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <IconBack handlePress={() => navigation.navigate('Home')} />
      <Image source={assets.logo} style={styles.imageLogo} />
      <Text
        style={{
          marginTop: 20,
          fontSize: SIZES.extraLarge,
          fontFamily: FONTS.regular,
          color: 'black',
        }}>
        Login
      </Text>
      <View
        style={{
          height: 25,
        }}
      />
      <FormLogin placeholder="Email" value={LoginReducer.formLogin.email} onChangeText={(value) => onChangeLogin(value, 'email')} />
      <FormLogin placeholder="Password" secureTextEntry={true} value={LoginReducer.formLogin.password} onChangeText={(value) => onChangeLogin(value, 'password')} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <RectButton title="Login" handlePress={sendData} />
        <RegisHere handlePress={() => navigation.navigate('Register')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  imageLogo: {
    padding: 65,
    marginTop: 15,
  },
});

export default Login;
