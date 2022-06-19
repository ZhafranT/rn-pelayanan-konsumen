import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LayoutBar = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.idStatus}</Text>
    </View>
  );
};

export default LayoutBar;

const styles = StyleSheet.create({});
