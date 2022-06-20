import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CardProfile, RectButton } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getprofile } from '../services/api';

const Profile = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(true)
  const [isdata, setisdata] = useState(null)

  useEffect(() => {
    getprofiledata()
  },[])

  const getprofiledata = async () => {
    const uid = await AsyncStorage.getItem('USER_ID')
    const databody = {
      user_id: uid
    }
    const {data,message} = await getprofile(databody);
    if (message == 200) {
      // handle 200
      setisLoading(false)
      setisdata(data.data[0])
    } else if (message == 400) {
      // handle 400
      console.log("Profile gagal",data);
      setisLoading(false)
    } else if (message == 500) {
      // handle 500
      console.log("Profile gagal",data);
      setisLoading(false)
    } else {
      // no interner
      console.log("Profile no internet",data);
      setisLoading(false)
    }
  }

  const logoutfunc = async () => {
    await AsyncStorage.clear();
    setTimeout(() => {
      navigation.navigate('Spalsh');
    }, 0);
  };

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 20,
          top: 40,
          fontFamily: FONTS.medium,
          fontSize: SIZES.extraLarge,
        }}>
        Profil Saya
      </Text>
      <View
        style={{
          height: 50,
        }}
      />
      <View style={{alignItems: 'center'}}>
        <CardProfile username={isLoading == true ? 'Loading...' : isdata == null ? '' : isdata.namaLengkap} numbersellphone={isLoading == true ? 'Loading...' : isdata == null ? '' : isdata.noTelp} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: 220,
          marginTop: 10,
        }}>
        <RectButton title="Logout" backgroundColor={COLORS.secondary2} handlePress={() => logoutfunc()} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
