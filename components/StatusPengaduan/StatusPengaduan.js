import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SIZES, FONTS, COLORS } from '../../constants';

const StatusPengaduan = ({ item, lookdetail }) => {
  return (
    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }} onPress={() => lookdetail(item)}>
      <View
        style={{
          width: 355,
          backgroundColor: COLORS.primary3,
          paddingHorizontal: 8,
          marginHorizontal: 10,
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
            <Text style={styles.textStatus}>{item.nama}</Text>
            <Text style={styles.textStatus}>{item.jenisPengaduan}</Text>
          </View>
          <View style={styles.Status}>
            <Text style={[styles.textStatus]}>{item.respon_pengaduan.statusPengaduan}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StatusPengaduan;

const styles = StyleSheet.create({
  textStatus: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
  },
  Status: {
    backgroundColor: COLORS.primary2,
    width: 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
