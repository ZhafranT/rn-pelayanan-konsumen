import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const RectButton = ({ title, handlePress }) => {
  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={handlePress}>
      <Text style={styles.textLogin}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    width: 235,
    backgroundColor: COLORS.primary2,
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
