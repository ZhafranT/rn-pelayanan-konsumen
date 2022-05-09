import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES, FONTS } from '../../constants';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDesc}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: COLORS.white,
    marginRight: 20,
    borderRadius: 15,
    shadowColor: SHADOWS.dark,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 15,
  },
  itemTitle: {
    color: COLORS.white,
    fontSize: SIZES.large,
    shadowColor: SHADOWS.dark,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontFamily: FONTS.bold,
    elevation: 5,
  },
  itemDesc: {
    color: COLORS.white,
    fontSize: SIZES.small,
    shadowColor: SHADOWS.dark,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CarouselItem;
