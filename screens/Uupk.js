import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { FocusStatusBar, UupkItems } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, UupkData } from '../constants';

const Uupk = () => {
  // const [uupk, setUupk] = useState(UupkData);

  return (
    <SafeAreaView style={{ flex: 1, height: '100%' }}>
      <FocusStatusBar background={COLORS.gray} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.primary3,
          height: 50,
          borderRadius: 10,
          marginVertical: 10,
          ...SHADOWS.dark,
        }}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.medium,
          }}>
          Undang - Undang Pelayanan Konsumen
        </Text>
      </View>
      <View>
        <UupkItems data={UupkData} />
      </View>
    </SafeAreaView>
  );
};

export default Uupk;
