import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';

import { assets } from '../constants';

import { checklogin } from '../utils';

const Spalsh = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Navi');
  //   }, 3000);
  // }, []);

  // const [islogin, setIslogin] = useState(null);

  useEffect(() => {
    loginmethod();
  }, []);

  const loginmethod = async () => {
    console.log('ASpalshpp | checklogin', await checklogin());
    if (await checklogin()) {
      setTimeout(() => {
        navigation.replace('Navilogin');
      }, 1000);
    } else {
      setTimeout(() => {
        navigation.replace('Navinon');
      }, 1000);
    }
  };

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
