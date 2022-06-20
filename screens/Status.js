import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { FocusStatusBar, IconBack } from '../components';
import { getstatuspengaduan } from '..//services/api';

const Status = () => {
  const navigation = useNavigation();
  const [test, setTest] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const { data, message } = await getstatuspengaduan();
    if (message == 200) {
      // handle 200
      // setisLoading(false)
      console.log('Status', data);
      // setTimeout(() => {
      //   navigation.navigate('Login');
      // }, 2000);
    } else if (message == 400) {
      // handle 400
      console.log('Status gagal', data);
      // setisLoading(false)
      // setmainerrmmsg(data)
    } else if (message == 500) {
      // handle 500
      console.log('Status gagal', data);
      // setisLoading(false)
    } else {
      // no interner
      console.log('Status no internet', data);
      // setisLoading(false)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="light-content" background={COLORS.gray} />
      <View
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
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={[
            { id: 1, name: 'oke', tgl: '123' },
            { id: 2, name: 'oke', tgl: '123' },
            { id: 3, name: 'oke', tgl: '123' },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ margin: 8, marginRight: 12, marginLeft: 12 }} onPress={null}>
              <View
                style={{
                  backgroundColor: '#17C3B2',
                  padding: 8,
                  borderRadius: 8,
                }}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.tgl}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

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
