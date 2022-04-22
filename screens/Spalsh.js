import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { assets } from '../constants';

const Spalsh = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image source={assets.splash} resizeMode="cover" style={{ width: 295, height: 381 }} />
    </View>
  );
};

export default Spalsh;
