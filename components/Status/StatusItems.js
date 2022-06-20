import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, FONTS } from '../../constants';

const StatusItems = ({ item }) => {
  return (
    <TouchableOpacity style={{ margin: 8, marginRight: 12, marginLeft: 12 }} onPress={null}>
      <View
        style={{
          height: 50,
          backgroundColor: COLORS.primary2,
          padding: 8,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{item.name}</Text>
        <Text>{item.id}</Text>
        <Text>{item.tgl}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StatusItems;

const styles = StyleSheet.create({});
