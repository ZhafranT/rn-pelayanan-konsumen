import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FocusStatusBar, RectButton } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Akses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FocusStatusBar background={COLORS.gray} />
      <Text style={styles.text}>Harus Login terlebih dahulu</Text>
      <RectButton title="Login" handlePress={() => navigation.navigate('Login')} backgroundColor={COLORS.primary2} />
    </View>
  );
};

export default Akses;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginBottom: 10,
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
  },
});
