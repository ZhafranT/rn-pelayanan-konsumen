import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RectButton } from '../components';
import { COLORS } from '../constants';

const Akses = ({ navigation }) => {
  return (
    <View>
      <Text>Harus login dulu</Text>
      <RectButton title="Login" handlePress={navigation.navigate('Login')} backgroundColor={COLORS.primary2} />
    </View>
  );
};

export default Akses;

const styles = StyleSheet.create({});
