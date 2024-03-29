import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';

import { NewsTitle } from './SubInfo';

const NewsItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: data ? data.photo : null}} resizeMode="cover" style={styles.image} />
      </View>
      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}>
        <NewsTitle title={data ? data.judulBerita: 'loading..'} titleSize={SIZES.large} description={data ? data.isiBerita.substring(0, 100) : 'loading..'} descriptionSize={SIZES.small} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: '100%',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NewsItem;
