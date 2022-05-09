import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';

import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

import { FocusStatusBar, Icon, IconNews, IconPengaduan, IconUupk } from '../components';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../components/Carousel';
import { CarouselData } from '../constants';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar background={COLORS.gray} />
      <View style={styles.itemHeader}>
        <Image source={assets.logo} style={styles.logo} />
        <Icon />
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
        <IconPengaduan handlePress={() => navigation.navigate('Register')} />
        <IconUupk handlePress={() => navigation.navigate('Login')} />
      </View>
      <View
        style={{
          width: 360,
          height: 52,
          backgroundColor: COLORS.primary2,
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: 665,
          left: 8,
        }}
      />
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
