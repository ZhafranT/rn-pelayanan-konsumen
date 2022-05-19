import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { FormPengaduan, RectButton } from '../components';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

const Pengaduan = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: SIZES.large,
          fontFamily: FONTS.medium,
        }}>
        Pengaduan
      </Text>
      <ScrollView>
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="nama" />
        <FormPengaduan placeholder="test" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <RectButton title="Submit" backgroundColor={COLORS.primary2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pengaduan;
