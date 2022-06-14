import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CardProfile, RectButton } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();

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
      <View>
        <CardProfile username="Zhafran Tosa" numbersellphone="081311439737" />
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
