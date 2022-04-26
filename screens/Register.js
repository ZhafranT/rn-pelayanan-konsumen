import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

// assset
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

import { FocusStatusBar, RectButton } from '../components';
import { FormRegis } from '../components';

const Register = () => {
  const globalState = useSelector((state) => state);

  const [formRegis, setFormRegis] = useState({
    fullName: '',
    email: '',
    nomorHp: '',
    password: '',
  });

  const onChangeRegis = (value, input) => {
    setFormRegis({
      ...formRegis,
      [input]: value,
    });
  };

  const sendData = () => {
    console.log('data masuk : ', formRegis);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <Image source={assets.logo} style={styles.image} />
      <Text
        style={{
          marginTop: 16,
          fontSize: SIZES.extraLarge,
          fontFamily: FONTS.regular,
          color: 'black',
        }}>
        Register
        {globalState.name}
      </Text>
      <View
        style={{
          height: 25,
        }}
      />
      <FormRegis placeholder="Nama" value={formRegis.fullName} onChangeText={(value) => onChangeRegis(value, 'fullName')} />
      <FormRegis placeholder="Email" value={formRegis.email} onChangeText={(value) => onChangeRegis(value, 'email')} />
      <FormRegis placeholder="Nomor Headphone" keyboardType="numeric" value={formRegis.nomorHp} onChangeText={(value) => onChangeRegis(value, 'nomorHp')} />
      <FormRegis placeholder="Password" secureTextEntry={true} value={formRegis.password} onChangeText={(value) => onChangeRegis(value, 'password')} />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RectButton title="Daftar" handlePress={sendData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    marginTop: 25,
  },
});

export default Register;
