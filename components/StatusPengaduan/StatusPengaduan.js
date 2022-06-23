import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StatusPengaduan = ({ item, lookdetail }) => {
  return (
    <TouchableOpacity style={{ margin: 8, marginRight: 12, marginLeft: 12 }} onPress={() => lookdetail(item)}>
      <View
        style={{
          backgroundColor: '#17C3B2',
          padding: 8,
          borderRadius: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text>{item.nama}</Text>
            <Text>{item.jenisPengaduan}</Text>
          </View>
          <Text>{item.respon_pengaduan.statusPengaduan}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StatusPengaduan;

const styles = StyleSheet.create({});
