import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// assset
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import Toast from 'react-native-toast-message';
import { FocusStatusBar, IconBack, RectButton, RegisHere, FormLogin } from '../components';
import { setFormLogin } from '../redux';

const Login = ({ navigation }) => {
  const LoginReducer = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const [errmmsg, setErrmsg] = useState(null);
  const [mainerrmmsg, setmainerrmmsg] = useState(null);

  useEffect(() => {
    getdata();
  }, [errmmsg, mainerrmmsg]);

  const getdata = () => {
    if (errmmsg != null || errmmsg != undefined) {
      console.log('errmmsg', errmmsg);
      // const x = JSON.parse(errmmsg);
      // let newerr = [];
      // for (let index = 0; index < Object.keys(errmmsg).length; index++) {
      //   // newerr.push({ errname: Object.keys(x)[index], errdesc: Object.values(x)[index][0] });
      //   console.log(newerr);
      // }
      setmainerrmmsg(errmmsg);
      // console.log(newerr);
    }
  };

  const onChangeLogin = (value, input) => {
    dispatch(setFormLogin(input, value));
  };

  const sendData = () => {
    const dataLogin = LoginReducer.formLogin;

    const body = {
      email: dataLogin.email,
      password: dataLogin.password,
    };

    const url = 'https://pelayanan-konsumen.herokuapp.com/api/login';
    // const url = 'https://7acc-139-0-234-230.ap.ngrok.io/api/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : {},
    };
    fetch(url, requestOptions)
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(([res, data]) => {
        if (res == 200) {
          console.log('Login | 200', data);
          AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(data));
          AsyncStorage.setItem('IS_LOGIN', 'true');

          Toast.show({
            type: 'success',
            text1: 'Login successfull',
          });

          setTimeout(() => {
            navigation.navigate('Spalsh');
          }, 2000);
        } else if (res == 400) {
          // setErrmsg(data);
          console.log('Login | 400', data);
        } else {
          console.log('Login | 500', data);
        }
      })
      .catch((err) => {
        // handle error
        console.log('Login | err', err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <Toast />
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
        <Text>{errmmsg}</Text>
        <RectButton title="Login" handlePress={sendData} backgroundColor={COLORS.primary2} />
        <RegisHere handlePress={() => navigation.navigate('Register')} />
      </View>
      {mainerrmmsg != null &&
        Object.keys(mainerrmmsg).map((i, x) => (
          <View>
            <Text>{Object.keys(mainerrmmsg)[x]}</Text>
            {Object.values(mainerrmmsg)[x].map((r) => (
              <Text>{r}</Text>
            ))}
          </View>
        ))}

      <View
        style={{
          height: 100,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    // position: '',
  },
  imageLogo: {
    padding: 65,
    marginTop: 15,
  },
});

export default Login;
