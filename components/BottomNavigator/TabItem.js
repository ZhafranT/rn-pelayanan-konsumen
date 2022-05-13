import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
