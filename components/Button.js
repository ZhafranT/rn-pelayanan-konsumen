import React from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const RectButton = ({ title, handlePress, backgroundColor }) => {
  return (
    <TouchableOpacity style={[stylesRectButton.appButtonContainer, backgroundColor && { backgroundColor }]} onPress={handlePress}>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontWeight: '500',
          color: COLORS.white,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const stylesRectButton = StyleSheet.create({
  appButtonContainer: {
    width: 235,
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },
});

export const RegisHere = ({ handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          marginTop: 15,
        }}>
        Belum punya akun ? daftar disini
      </Text>
    </TouchableOpacity>
  );
};

export const IconBack = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={assets.left}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </TouchableOpacity>
  );
};



export const IconNotif = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={assets.notif}
        style={{
          width: 30,
          height: 30,
          right: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export const IconHelp = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={assets.help}
        style={{
          width: 30,
          height: 30,
          left: 5,
        }}
      />
    </TouchableOpacity>
  );
};

// ======================== home =============================

export const IconNews = ({ handlePress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          ...SHADOWS.dark,
        }}
        onPress={handlePress}>
        <Image
          source={assets.news}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: SIZES.font,
          fontFamily: FONTS.regular,
          marginTop: 5,
        }}>
        Berita
      </Text>
    </View>
  );
};

export const IconUupk = ({ handlePress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          ...SHADOWS.dark,
        }}
        onPress={handlePress}>
        <Image
          source={assets.uupk}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: SIZES.font,
          fontFamily: FONTS.regular,
          marginTop: 5,
        }}>
        UU PK
      </Text>
    </View>
  );
};

export const IconPengaduan = ({ handlePress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          ...SHADOWS.dark,
        }}
        onPress={handlePress}>
        <Image
          source={assets.pengaduan}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: SIZES.font,
          fontFamily: FONTS.regular,
          marginTop: 5,
        }}>
        Pengaduan
      </Text>
    </View>
  );
};
