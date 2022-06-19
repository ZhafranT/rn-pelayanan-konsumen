import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS, StatusPengaduan } from '../constants';
import { FocusStatusBar, IconBack, StatusBar } from '../components';

import axios from 'axios';

const Status = () => {
  const navigation = useNavigation();
  const [test, setTest] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <IconBack handlePress={() => navigation.navigate('Home')} />
        <View
          style={{
            justifyContent: 'center',
            right: 130,
          }}>
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.regular,
            }}>
            Status Laporan
          </Text>
        </View>
      </View>
      <View>
        <StatusBar data={StatusPengaduan} />
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
    padding: 65,
    marginTop: 15,
  },
});

export default Status;
