import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Fontisto } from '@expo/vector-icons';

import { FocusStatusBar, FormPengaduan, RectButton } from '../components';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

const Pengaduan = () => {
  const [pickerGender, setPickerGender] = useState('Male');
  const [pickerJenisProduk, setPickerJenisProduk] = useState('Pilih Kategori');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState('mm/dd/yyyy');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getMonth() + 1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();

    setTextDate(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: 10,
      }}>
      <FocusStatusBar background={COLORS.gray} />
      <View
        style={{
          width: 400,
          height: 60,
          backgroundColor: COLORS.primary3,
          right: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.medium,
          }}>
          Pengaduan
        </Text>
      </View>
      <ScrollView>
        {/* <FormPengaduan placeholder="nama" value={LoginReducer.formLogin.email} handlePress={(value) => onChangeLogin(value, 'email')}/> */}
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            textAlign: 'center',
            marginTop: 10,
          }}>
          IDENTITAS KONSUMEN
        </Text>
        <FormPengaduan placeholder="nama" />
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 10,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Picker
            selectedValue={pickerGender}
            onValueChange={(itemValue) => setPickerGender(itemValue)}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Male" value="Male" style={styles.gender} />
            <Picker.Item label="Lady" value="Lady" style={styles.gender} />
          </Picker>
        </View>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Tanggal Lahir
        </Text>
        <View
          style={{
            width: 200,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 10,
            marginLeft: 0,
            margin: 10,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.regular,
            }}>
            {textDate}
          </Text>
          <TouchableOpacity onPress={() => showMode('date')}>
            <Fontisto name="date" size={24} color="black" />
          </TouchableOpacity>
          {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onChange} />}
        </View>

        <FormPengaduan placeholder="NIK" keyboardType="numeric" />
        <FormPengaduan placeholder="Telphone / hp" keyboardType="numeric" />
        <FormPengaduan placeholder="Email" />
        <FormPengaduan placeholder="Alamat" height={100} />
        <View style={{ height: 30 }} />
        <FormPengaduan placeholder="Provinsi" />
        <FormPengaduan placeholder="Kota / Kabupaten" />
        <FormPengaduan placeholder="Kode Pos" keyboardType="numeric" />
        <View style={{ height: 20 }} />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            textAlign: 'center',
          }}>
          IDENTITAS PELAKU USAHA
        </Text>

        <FormPengaduan placeholder="Alamat" height={100} />
        <View style={{ height: 30 }} />
        <FormPengaduan placeholder="Telphone / hp" keyboardType="numeric" />
        <FormPengaduan placeholder="Provinsi" />
        <FormPengaduan placeholder="Kota / Kabupaten" />
        <FormPengaduan placeholder="Kode Pos" keyboardType="numeric" />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            textAlign: 'center',
          }}>
          TENTANG PENGADUAN
        </Text>

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Jenis Produk
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 10,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Picker
            selectedValue={pickerJenisProduk}
            onValueChange={(itemValue) => setPickerJenisProduk(itemValue)}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Jasa" value="Male" style={styles.gender} />
            <Picker.Item label="Barang" value="Lady" style={styles.gender} />
          </Picker>
        </View>
        {/* show dari 2 kategori */}
        <Text>Show 2 jenis kategori yang berbeda</Text>
        <FormPengaduan placeholder="Type" />
        <FormPengaduan placeholder="Jenis Pengaduan" />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Tanggal Kejadian
        </Text>
        <View
          style={{
            width: 200,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 10,
            marginLeft: 0,
            margin: 10,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.regular,
            }}>
            {textDate}
          </Text>
          <TouchableOpacity onPress={() => showMode('date')}>
            <Fontisto name="date" size={24} color="black" />
          </TouchableOpacity>
          {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onChange} />}
        </View>
        <FormPengaduan placeholder="Lokasi Kejadian" />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Bukti - Bukti
        </Text>
        <FormPengaduan placeholder="Bukti Pembelian" />

        <FormPengaduan placeholder="Saksi" />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            color: COLORS.secondary2,
          }}>
          *Saksi Jika ada
        </Text>
        <FormPengaduan placeholder="Bentuk Kerugian" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <RectButton title="Submit" backgroundColor={COLORS.primary2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gender: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
  },
});

export default Pengaduan;
