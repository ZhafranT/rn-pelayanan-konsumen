import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableHighlight, SafeAreaView, Alert } from 'react-native';
import React from 'react';

import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

import { FocusStatusBar, RectButton } from '../components';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FocusStatusBar background={COLORS.gray} />
      <View style={styles.itemHeader}>
        <View style={{ paddingLeft: 30 }}>
          <Image source={assets.logo} />
        </View>
        <View style={styles.buttonHeader}>
          {/* <ButtonIcon title={'Notif'} handlePress={() => navigation.navigate('Notif')} />
          <Gap width={10} />
          <ButtonIcon title={'Bantuan'} handlePress={() => navigation.navigate('Bantuan')} /> */}
        </View>
      </View>
      <View style={styles.iconLayanan}>
        {/* <ButtonIcon
          title="Berita"
          type="layanan"
          // onPress={() => alert('Horee')}
          onPress={() => navigation.navigate('News')}
        /> */}
        {/* <ButtonIcon title="Pengaduan" type="layanan" handlePress={() => navigation.navigate('Laporan')} />
        <ButtonIcon title="UU PK" type="layanan" handlePress={() => navigation.navigate('Uupk')} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemHeader: {},
  buttonHeader: {
    paddingTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 30,
  },
});
