import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { FocusStatusBar, IconBack, RectButton, StatusPengaduan } from '../components';
import { getstatuspengaduan } from '..//services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Status = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(true);
  const [datresp, setdatresp] = useState(null);
  const [isdetail, setisdetail] = useState(false);
  const [isdetaildata, setisdetaildata] = useState(null);
  let count = 0;
  useEffect(() => {
    if (count == 0) {
      getdata();
    }
    count++;
  }, [isdetaildata]);

  const onRefreshdata = () => {
    setisLoading(true);
    getdata();
  };

  const getdata = async () => {
    const uid = await AsyncStorage.getItem('USER_ID');
    const databody = {
      user_id: uid,
    };
    const { data, message } = await getstatuspengaduan(databody);
    if (message == 200) {
      // handle 200
      setisLoading(false);
      console.log('Status', data);
      setdatresp(data.data);
    } else if (message == 400) {
      // handle 400
      console.log('Status gagal', data);
      setisLoading(false);
    } else if (message == 500) {
      // handle 500
      console.log('Status gagal', data);
      setisLoading(false);
    } else {
      // no interner
      console.log('Status no internet', data);
      setisLoading(false);
    }
  };

  const lookdetail = (value) => {
    if (isdetail == false) {
      setisdetaildata(value);
      setisdetail(true);
    } else {
      setisdetail(false);
      setisdetaildata(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <Text
        style={{
          padding: 30,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {isdetail == false ? 'Status Pengaduan' : 'Detail Pengaduan'}
      </Text>
      {isdetail == false ? (
        <View style={{ flex: 1 }}>
          {isLoading == true ? (
            <TouchableOpacity style={{ margin: 8, marginRight: 12, marginLeft: 12 }} onPress={null}>
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
                    <Text>loading...</Text>
                    <Text>loading...</Text>
                  </View>
                  <Text>loading...</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <FlatList
              data={datresp}
              refreshing={isLoading}
              onRefresh={() => onRefreshdata()}
              renderItem={({ item }) => <StatusPengaduan item={item} lookdetail={lookdetail} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              style={
                {
                  // Hold
                }
              }
            />
          )}
        </View>
      ) : isdetaildata != null ? (
        <Detailpengaduan lookdetail={lookdetail} item={isdetaildata} />
      ) : null}
    </SafeAreaView>
  );
};

const Detailpengaduan = ({ lookdetail, item }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 350,
          borderRadius: 10,
          padding: 10,
          margin: 10,
          backgroundColor: '#17C3B2',
        }}>
        <View style={styles.boxHeadDetail}>
          <Text style={styles.texthead}>{item.nama}</Text>
          <Text style={[styles.texthead, styles.bgColorStatus]}>{item.respon_pengaduan.statusPengaduan}</Text>
        </View>
        <View
          style={{
            height: 10,
          }}
        />
        <Text style={styles.textDetail}>Jenis : {item.jenisPengaduan}</Text>
        <Text style={styles.textDetail}>Tanggal Dibuat : {item.created_at}</Text>
        <Text style={styles.textDetail}>Kejadian : {item.tempatLokasiKejadian}</Text>
        <Text style={styles.textDetail}>Kronologis : {item.kronologisPengaduan}</Text>
        <Text style={styles.textDetail}>Saksi : {item.saksi}</Text>
        <Text style={styles.textDetail}>Lokasi Mediasi : {item.respon_pengaduan.tempatMediasi}</Text>
        <Text style={styles.textDetail}>Tanggal Mediasi : {item.respon_pengaduan.tanggalMediasi}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <RectButton title="Back" handlePress={lookdetail} backgroundColor={COLORS.primary1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLogo: {
    padding: 65,
    marginTop: 15,
  },
  boxHeadDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary3,
    height: 45,
    paddingHorizontal: 18,
    marginHorizontal: -10,
    bottom: 11,
    zIndex: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...SHADOWS.superDark,
  },
  bgColorStatus: {},
  texthead: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
  },
  bgColor: {},
  textDetail: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    marginBottom: 10,
  },
});

export default Status;
