import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { FocusStatusBar, UupkItems } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, UupkData } from '../constants';
import { getuupkapi } from '../services/api';

const Uupk = () => {
  const [uupk, setUupk] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getuupkdata();
  }, [uupk]);

  const getuupkdata = async () => {
    const { data, message } = await getuupkapi();
    if (message == 200) {
      // handle 200
      setUupk(data.data);
    } else if (message == 400) {
      // handle 400
    } else if (message == 500) {
      // handle 500
    } else {
      // no interner
    }
    setisLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      <View style={{ flex: 1 }}>
        {isLoading == true ? (
          <UupkItems data={''} />
        ) : uupk != null ? (
          <FlatList
            data={uupk}
            renderItem={({ item }) => <UupkItems data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            style={
              {
                //Hold
              }
            }
          />
        ) : (
          <Text
            style={{
              textAlign: 'center',
            }}>
            No uupk
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Uupk;
