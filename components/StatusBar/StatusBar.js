import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LayoutBar from './LayoutBar';

const StatusBar = ({ data }) => {



  if (data && data.length) {
    return (
      <View>
        <FlatList 
            data={data} 
            renderItem={({ item }) => <LayoutBar data={item} />}
            keyExtractor={(item) => item.idStatus}
            showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
  console.log('Dont Have any Status Pengaduan');
  return null;
};

export default StatusBar;

const styles = StyleSheet.create({});
