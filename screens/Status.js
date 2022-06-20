import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { FocusStatusBar, IconBack, StatusItems } from '../components';
import { getstatuspengaduan } from '..//services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Status = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(true);
  const [datresp, setdatresp] = useState(null);
  const [isdetail, setisdetail] = useState(false)
  const [isdetaildata, setisdetaildata] = useState(null)
  let count = 0
  useEffect(() => {
    if (count == 0) {
      getdata()
    }
    count++
  }, [isdetaildata]);

  const onRefreshdata = () => {
    setisLoading(true)
    getdata()
  }

  const getdata = async () => {
    const uid = await AsyncStorage.getItem('USER_ID')
    const databody = {
      user_id: uid
    }
    const {data,message} = await getstatuspengaduan(databody);
    if (message == 200) {
      // handle 200
      setisLoading(false)
      console.log("Status",data);
      setdatresp(data.data)
    } else if (message == 400) {
      // handle 400
      console.log("Status gagal",data);
      setisLoading(false)
    } else if (message == 500) {
      // handle 500
      console.log("Status gagal",data);
      setisLoading(false)
    } else {
      // no interner
      console.log("Status no internet",data);
      setisLoading(false)
    }
  };

  const lookdetail = (value) => {
    if (isdetail == false) {
      setisdetaildata(value)
      setisdetail(true)
    } else {
      setisdetail(false)
      setisdetaildata(null)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <IconBack handlePress={() => navigation.navigate('Home')} />
        <View
          style={{
            justifyContent: 'center',
            right: 130,
          }}>
          <Text
            style={{
              fontSize: SIZES.large,
              fontFamily: FONTS.regular,
            }}>
            Status Laporan
          </Text>
        </View>
      </View> */}
      <Text style={{
        padding: 30,
        textAlign: 'center',
        fontWeight: 'bold'
      }}>{isdetail == false ? 'Status Pengaduan': 'Detail Pengaduan' }</Text>
      {isdetail == false ? (
        <View style={{flex: 1}}>
          {isLoading == true ? (
            <TouchableOpacity style={{margin: 8, marginRight: 12, marginLeft: 12}} onPress={null}>
              <View style={{
                backgroundColor: '#17C3B2',
                padding: 8,
                borderRadius: 8
              }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
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
              renderItem={({ item }) => 
                <TouchableOpacity style={{margin: 8, marginRight: 12, marginLeft: 12}} onPress={() => lookdetail(item)}>
                  <View style={{
                    backgroundColor: '#17C3B2',
                    padding: 8,
                    borderRadius: 8
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <View>
                        <Text>{item.nama}</Text>
                        <Text>{item.jenisPengaduan}</Text>
                      </View>
                      <Text>{item.respon_pengaduan.statusPengaduan}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      ) : (
        isdetaildata != null ? (
          <Detailpengaduan lookdetail={lookdetail} item={isdetaildata}/>
        ) : (
          null
        )
      )}
    </SafeAreaView>
  );
};

const Detailpengaduan = ({lookdetail,item}) => {
  return(
    <View style={{flex: 1}}>
      <View style={{
        borderRadius: 8,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        backgroundColor: '#17C3B2'
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text>{item.nama}</Text>
          <Text>{item.respon_pengaduan.statusPengaduan}</Text>
        </View>
        <Text>{item.nama}</Text>
        <Text>{item.jenisPengaduan}</Text>
        <Text>{item.created_at}</Text>
        <Text>{item.tempatLokasiKejadian}</Text>
        <Text>{item.kronologisPengaduan}</Text>
        <Text>{item.saksi}</Text>
      </View>
      <View style={{
        backgroundColor: '#17C3B2',
        borderRadius: 8,
        padding: 10,
        margin: 30
      }}>
        <TouchableOpacity onPress={lookdetail}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 10,
  },
  imageLogo: {
    padding: 65,
    marginTop: 15,
  },
});

export default Status;
