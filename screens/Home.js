import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import { assets, COLORS, SHADOWS, SIZES, FONTS, CarouselData } from '../constants';

import { FocusStatusBar, IconNews, IconPengaduan, IconUupk, Carousel, IconNotif, IconHelp } from '../components';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar background={COLORS.gray} />
      <View style={styles.itemHeader}>
        <Image source={assets.logo} style={styles.logo} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <IconNotif handlePress={() => navigation.navigate('Notif')} />
          <IconHelp handlePress={() => navigation.navigate('Help')} />
        </View>
      </View>
      {/* COROSEL */}
      <View
        style={{
          marginTop: 10,
        }}>
        <Carousel data={CarouselData} />
      </View>
      {/* HOME activity */}
      <View
        style={{
          height: 25,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <IconNews handlePress={() => navigation.navigate('News')} />
        <IconPengaduan handlePress={() => navigation.navigate('Pengaduan')} />
        <IconUupk handlePress={() => navigation.navigate('Uupk')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },

  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 62,
    height: 62,
  },
  buttonHeader: {
    paddingTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 30,
  },
});
