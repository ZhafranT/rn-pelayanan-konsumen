import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// assset
import { assets, COLORS, SIZES, FONTS } from '../constants';

import { FocusStatusBar, IconBack, RectButton, FormRegis } from '../components';
import { setFormRegis } from '../redux';

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
      <FormRegis placeholder="Nama" value={RegisterReducer.formRegis.fullName} onChangeText={(value) => onChangeRegis(value, 'fullName')} />
      <FormRegis placeholder="Email" value={RegisterReducer.formRegis.email} onChangeText={(value) => onChangeRegis(value, 'email')} />
      <FormRegis placeholder="Nomor Headphone" keyboardType="numeric" value={RegisterReducer.formRegis.nomorHp} onChangeText={(value) => onChangeRegis(value, 'nomorHp')} />
      <FormRegis placeholder="Password" secureTextEntry={true} value={RegisterReducer.formRegis.password} onChangeText={(value) => onChangeRegis(value, 'password')} />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
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
