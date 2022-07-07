import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const UupkItems = ({ data }) => {
  return (
    <View style={[styles.container, styles.separator]}>
      <Text style={[styles.text, styles.bab]}>Bab : {data.bab}</Text>
      <Text style={[styles.text, styles.judulBab]}>Judul : {data.judulBab}</Text>
      <Text style={[styles.text, styles.pasal]}>Pasal : {data.pasal}</Text>
      <Text style={[styles.text, styles.nomorUU]}>UU : {data.nomorUU}</Text>
      <Text style={[styles.text, styles.isi]}>{data.isi}</Text>
    </View>
  );
};

export default UupkItems;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    marginBottom: 10,
  },
});
