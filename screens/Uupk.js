import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { FocusStatusBar, UupkItems } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, UupkData } from '../constants';

const Uupk = () => {
  // const [uupk, setUupk] = useState(UupkData);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusStatusBar background={COLORS.gray} />
      <Text
        style={{
          margin: 10,
          padding: 10,
          textAlign: 'center',
          fontSize: SIZES.large,
          fontFamily: FONTS.medium,
          justifyContent: 'center',
          textAlignVertical: 'center',
          backgroundColor: COLORS.primary3,
          // height: 50,
          borderRadius: 10,
          // marginVertical: 10,
          ...SHADOWS.dark,
        }}>
          Undang - Undang Pelayanan Konsumen
        </Text>
        <UupkItems data={UupkData} />
      {/* <View
        style={{
          flex: 1
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: COLORS.primary3,
          // height: 50,
          // borderRadius: 10,
          // marginVertical: 10,
          // ...SHADOWS.dark,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: SIZES.large,
            fontFamily: FONTS.medium,
            justifyContent: 'center',
            textAlignVertical: 'center',
            backgroundColor: COLORS.primary3,
            height: 50,
            borderRadius: 10,
            marginVertical: 10,
            ...SHADOWS.dark,
          }}>
          Undang - Undang Pelayanan Konsumen
        </Text>
        <UupkItems data={UupkData} />
      </View> */}
      {/* <View>
        <UupkItems data={UupkData} />
      </View> */}
    </SafeAreaView>
  );
};

export default Uupk;
