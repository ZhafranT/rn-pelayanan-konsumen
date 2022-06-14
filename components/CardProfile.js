import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

const CardProfile = ({ username, numbersellphone }) => {
  return (
    <View
      style={{
        width: 355,
        height: 180,
        marginTop: 30,
        backgroundColor: COLORS.primary3,
        marginHorizontal: 15,
        borderRadius: 10,
        ...SHADOWS.medium,
      }}>
      <Image source={assets.logo} style={styles.imglogo} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 18,
          top: 20,
        }}>
        <Image source={assets.profilePic} style={styles.imgprofile} />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginLeft: 89,
          bottom: 35,
        }}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.numbersellphone}>{numbersellphone}</Text>
      </View>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  imglogo: {
    width: 65,
    height: 65,
    margin: 10,
    marginTop: 10,
  },
  imgprofile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
  },
  numbersellphone: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
  },
});
