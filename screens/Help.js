import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IconBack } from '../components';

import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

const Help = ({ navigation }) => {
  return (
    <View style={styles.helpContainer}>
      <View style={styles.icon}>
        <IconBack handlePress={() => navigation.navigate('Home')} />
      </View>
      <Image source={assets.splash} style={styles.logo} />
      <Text style={styles.text}>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</Text>
      <Text style={styles.text}>Kementerian Perdagangan Republik Indonesia Jl. M. I. Ridwan Rais No.5, Jakarta Pusat 10110</Text>
      <Text style={styles.text}>Telepon : +62-21-3858171, +62-21-3451692</Text>
      <Text style={styles.text}>Email : contact.us@kemendag.go.id</Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  helpContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    top: 10,
    right: 165,
  },
  logo: {
    width: 325,
    height: 425,
    marginBottom: 40,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    marginBottom: 10,
  },
});
