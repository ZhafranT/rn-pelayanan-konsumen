import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
// assset
import { assets, COLORS, SIZES, FONTS } from '../constants';
import { FocusStatusBar, IconBack, RectButton, FormRegis } from '../components';
import { setFormRegis } from '../redux';
import { Picker } from '@react-native-picker/picker';

const Register = () => {
  const RegisterReducer = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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

  const onChangeRegis = (value, input) => {
    dispatch(setFormRegis(input, value));
  };

  const sendData = () => {
    const dataRegister = RegisterReducer.formRegis;

    const body = {
      alamat: dataRegister.alamat,
      email: dataRegister.email,
      gender: dataRegister.gender,
      namaLengkap: dataRegister.namaLengkap,
      nik: dataRegister.nik,
      noTelp: dataRegister.noTelp,
      password: dataRegister.password,
    };

    // const url = 'https://pelayanan-konsumen.herokuapp.com/api/register';
    const url = 'https://7acc-139-0-234-230.ap.ngrok.io/api/register';
    const fetchRegister = async (body) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };

      fetch(url, requestOptions)
        .then((response) => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then(([res, data]) => {
          // handle success
          // console.log(res, data);
          if (res == 400) {
            // gagal
            // return res.json().then((body) => {
            //   throw new Error(body.error);
            // });
            setErrmsg(data);
          } else {
            // success
            // setsuccess('Register successfull');
            Toast.show({
              type: 'success',
              text1: 'Register successfull',
            });
            setTimeout(() => {
              navigation.navigate('Login');
            }, 2000);
          }
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    };
    fetchRegister(body);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <IconBack handlePress={() => navigation.navigate('Login')} />
      <Image source={assets.logo} style={styles.imageLogo} />
      <Text
        style={{
          marginTop: 16,
          fontSize: SIZES.extraLarge,
          fontFamily: FONTS.regular,
          color: 'black',
        }}>
        Register
      </Text>
      <View
        style={{
          height: 5,
        }}
      />

      <ScrollView>
        <FormRegis placeholder="NIK" keyboardType="numeric" value={RegisterReducer.formRegis.nik} onChangeText={(value) => onChangeRegis(value, 'nik')} />
        <FormRegis placeholder="Nama Lengkap" value={RegisterReducer.formRegis.namaLengkap} onChangeText={(value) => onChangeRegis(value, 'namaLengkap')} />
        <FormRegis placeholder="Email" value={RegisterReducer.formRegis.email} onChangeText={(value) => onChangeRegis(value, 'email')} />
        <FormRegis placeholder="Alamat" value={RegisterReducer.formRegis.alamat} onChangeText={(value) => onChangeRegis(value, 'alamat')} />
        <FormRegis placeholder="Nomor Headphone" keyboardType="numeric" value={RegisterReducer.formRegis.noTelp} onChangeText={(value) => onChangeRegis(value, 'noTelp')} />
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 10,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Picker
            selectedValue={RegisterReducer.formRegis.gender}
            onValueChange={(value) => onChangeRegis(value, 'gender')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Gender" style={styles.gender} />
            <Picker.Item label="pria" value="pria" style={styles.gender} />
            <Picker.Item label="wanita" value="wanita" style={styles.gender} />
          </Picker>
        </View>
        <FormRegis placeholder="Password" secureTextEntry={true} value={RegisterReducer.formRegis.password} onChangeText={(value) => onChangeRegis(value, 'password')} />
      </ScrollView>
      {mainerrmmsg != null &&
        Object.keys(mainerrmmsg).map((i, x) => (
          <View>
            <Text>{Object.keys(mainerrmmsg)[x]}</Text>
            {Object.values(mainerrmmsg)[x].map((r) => (
              <Text>{r}</Text>
            ))}
          </View>
        ))}
      <Toast />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <RectButton title="Daftar" handlePress={sendData} backgroundColor={COLORS.primary2} />
        {/* () => navigation.navigate('Login', { sendData }) */}
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
    marginTop: 10,
  },
  imageLeft: {
    width: 40,
    height: 40,
    marginTop: 15,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
});

export default Register;
