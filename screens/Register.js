import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

  const onChangeRegis = (value, input) => {
    dispatch(setFormRegis(input, value));
  };

  const sendData = () => {
    const dataRegister = RegisterReducer.formRegis;
    console.log('data masuk : ', dataRegister);

    const body = {
      alamat: dataRegister.alamat,
      email: dataRegister.email,
      gender: dataRegister.gender,
      namaLengkap: dataRegister.namaLengkap,
      nik: dataRegister.nik,
      noTelp: dataRegister.noTelp,
      password: dataRegister.password,
    };

    console.log(body);

    const getapi = async () => {
      const url = 'https://pelayanan-konsumen.herokuapp.com/api/register';
      const options = {
        method: 'post',
        url,
        body,
      };
      const res = await axios(options);
      console.log(res);
    };

    getapi();
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
            <Picker.Item label="pria" value="pria" style={styles.gender} />
            <Picker.Item label="wanita" value="wanita" style={styles.gender} />
          </Picker>
        </View>
        <FormRegis placeholder="Password" secureTextEntry={true} value={RegisterReducer.formRegis.password} onChangeText={(value) => onChangeRegis(value, 'password')} />
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <RectButton title="Daftar" handlePress={sendData} backgroundColor={COLORS.primary2} />
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
});

export default Register;
