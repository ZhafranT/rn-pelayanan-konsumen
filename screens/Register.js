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
import { registernewdata } from '../services/api';

const Register = () => {
  const RegisterReducer = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [mainerrmmsg, setmainerrmmsg] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {}, [mainerrmmsg, isLoading]);

  const onChangeRegis = (value, input) => {
    dispatch(setFormRegis(input, value));
  };

  const sendData = async () => {
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
    console.log(body);

    setisLoading(true);
    const { data, message } = await registernewdata(body);
    if (message == 201) {
      // handle 200
      setisLoading(false);
      navigation.navigate('Login');
    } else if (message == 400) {
      // handle 400
      setisLoading(false);
      setmainerrmmsg(data);
    } else if (message == 500) {
      // handle 500
      setisLoading(false);
    } else {
      // no interner
      setisLoading(false);
    }
    console.log(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <Toast />
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
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('nik') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="NIK" keyboardType="numeric" value={RegisterReducer.formRegis.nik} onChangeText={(value) => onChangeRegis(value, 'nik')} />
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('nama') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="Nama Lengkap" value={RegisterReducer.formRegis.namaLengkap} onChangeText={(value) => onChangeRegis(value, 'namaLengkap')} />
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('email') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="Email" value={RegisterReducer.formRegis.email} onChangeText={(value) => onChangeRegis(value, 'email')} />
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('alamat') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="Alamat" value={RegisterReducer.formRegis.alamat} onChangeText={(value) => onChangeRegis(value, 'alamat')} />
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('notelp') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="Nomor Headphone" keyboardType="numeric" value={RegisterReducer.formRegis.noTelp} onChangeText={(value) => onChangeRegis(value, 'noTelp')} />
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('gender') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
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
        {mainerrmmsg != null &&
          Object.keys(mainerrmmsg).map(
            (i, x) =>
              Object.keys(mainerrmmsg)[x].toLowerCase().includes('password') && (
                <View key={x}>
                  {Object.values(mainerrmmsg)[x].map((r) => (
                    <Text key={r} style={styles.texterr}>
                      {r}
                    </Text>
                  ))}
                </View>
              )
          )}
        <FormRegis placeholder="Password" secureTextEntry={true} value={RegisterReducer.formRegis.password} onChangeText={(value) => onChangeRegis(value, 'password')} />
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        {/* <RectButton title="Daftar" handlePress={sendData} backgroundColor={COLORS.primary2} /> */}
        {isLoading == true ? <RectButton title="loading.." backgroundColor={COLORS.primary2} /> : <RectButton title="Daftar" handlePress={sendData} backgroundColor={COLORS.primary2} />}
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
  texterr: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary2,
  },
});

export default Register;
