import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

const Help = () => {
  return (
    <View style={styles.helpContainer}>
      <Image source={assets.splash} style={styles.logo} />
      <Text>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga - Kementerian Perdagangan Republik Indonesia Jl. M. I. Ridwan Rais No.5, Jakarta Pusat 10110</Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  helpContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 325,
    height: 325,
    padding: 100,
  },
});
