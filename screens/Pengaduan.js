import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Fontisto } from '@expo/vector-icons';

import { FocusStatusBar, FormPengaduan, RectButton } from '../components';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setFormPengaduan } from '../redux';

const Pengaduan = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState('mm/dd/yyyy');

  useEffect(() => {}, [date]);

  const PengaduanReducer = useSelector((state) => state.pengaduanReducer);
  const dispatch = useDispatch();

  const onChangePengaduan = (value, input) => {
    dispatch(setFormPengaduan(input, value));
  };

  const sendData = () => {
    const dataPengaduan = PengaduanReducer.formPengaduan;
    console.log('data masuk : ', dataPengaduan);

    // const body = {
    //   alamat: dataPengaduan.alamat,
    //   email: dataPengaduan.email,
    //   gender: dataPengaduan.gender,
    //   namaLengkap: dataPengaduan.namaLengkap,
    //   nik: dataPengaduan.nik,
    //   noTelp: dataPengaduan.noTelp,
    //   password: dataPengaduan.password,
    // };
    // const url = 'https://pelayanan-konsumen.herokuapp.com/api/pengaduan';
    // const fetchRegister = async (body) => {
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(body),
    //   };

    //   fetch(url, requestOptions)
    //     .then((response) => {
    //       const statusCode = response.status;
    //       const data = response.json();
    //       return Promise.all([statusCode, data]);
    //     })
    //     .then(([res, data]) => {
    //       // handle success
    //       console.log(res, data);
    //       if (res === 200) {
    //         // success
    //       } else {
    //         // gagal
    //         setErrmsg(data);
    //       }
    //     })
    //     .catch((err) => {
    //       // handle error
    //       // setErrmsg()
    //       console.log(err);
    //     });
    // };

    // fetchRegister(body);
  };

  const onChange = (event, selectedDate, formtype) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getMonth() + 1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();

    setTextDate(fDate);
    dispatch(setFormPengaduan(formtype, tempDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 10 }}>
      <FocusStatusBar background={COLORS.gray} />
      <View style={styles.headers}>
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
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            textAlign: 'center',
            marginTop: 10,
          }}>
          IDENTITAS KONSUMEN
        </Text>
        <FormPengaduan placeholder="nama" value={PengaduanReducer.formPengaduan.nama} onChangeText={(value) => onChangePengaduan(value, 'nama')} />
        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.jenisKelamin}
            onValueChange={(value) => onChangePengaduan(value, 'jenisKelamin')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Gender" style={styles.gender} />
            <Picker.Item label="pria" value="pria" style={styles.gender} />
            <Picker.Item label="wanita" value="wanita" style={styles.gender} />
          </Picker>
        </View>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Tanggal Lahir
        </Text>
        <View style={styles.date}>
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
          {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onChange()} />}
        </View>

        <FormPengaduan placeholder="NIK" keyboardType="numeric" value={PengaduanReducer.formPengaduan.noIdentitas} onChangeText={(value) => onChangePengaduan(value, 'noIdentitas')} />
        <FormPengaduan placeholder="Telphone / hp" keyboardType="numeric" value={PengaduanReducer.formPengaduan.telepon} onChangeText={(value) => onChangePengaduan(value, 'telepon')} />
        <FormPengaduan placeholder="Email" value={PengaduanReducer.formPengaduan.email} onChangeText={(value) => onChangePengaduan(value, 'email')} />
        <FormPengaduan placeholder="Alamat" height={100} value={PengaduanReducer.formPengaduan.alamat} onChangeText={(value) => onChangePengaduan(value, 'alamat')} />
        <View style={{ height: 30 }} />
        <FormPengaduan placeholder="Provinsi" value={PengaduanReducer.formPengaduan.provinsi} onChangeText={(value) => onChangePengaduan(value, 'provinsi')} />
        <FormPengaduan placeholder="Kota / Kabupaten" value={PengaduanReducer.formPengaduan.kotaKabupaten} onChangeText={(value) => onChangePengaduan(value, 'kotaKabupaten')} />
        <FormPengaduan placeholder="Kode Pos" keyboardType="numeric" value={PengaduanReducer.formPengaduan.kodePos} onChangeText={(value) => onChangePengaduan(value, 'kodePos')} />
        <View style={{ height: 20 }} />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            textAlign: 'center',
          }}>
          IDENTITAS PELAKU USAHA
        </Text>

        <FormPengaduan placeholder="Alamat" height={100} value={PengaduanReducer.formPengaduan.alamatPelakuUsah} onChangeText={(value) => onChangePengaduan(value, 'alamatPelakuUsah')} />
        <View style={{ height: 30 }} />
        <FormPengaduan placeholder="Telphone / hp" keyboardType="numeric" value={PengaduanReducer.formPengaduan.teleponPelakuUsaha} onChangeText={(value) => onChangePengaduan(value, 'teleponPelakuUsaha')} />
        <FormPengaduan placeholder="Provinsi" value={PengaduanReducer.formPengaduan.provinsiPelakuUsaha} onChangeText={(value) => onChangePengaduan(value, 'provinsiPelakuUsaha')} />
        <FormPengaduan placeholder="Kota / Kabupaten" value={PengaduanReducer.formPengaduan.kotaKabupatenPelakuUsaha} onChangeText={(value) => onChangePengaduan(value, 'kotaKabupatenPelakuUsaha')} />
        <FormPengaduan placeholder="Kode Pos" keyboardType="numeric" value={PengaduanReducer.formPengaduan.kodePosPelakuUsaha} onChangeText={(value) => onChangePengaduan(value, 'kodePosPelakuUsaha')} />
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
        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.jenisProduk}
            onValueChange={(value) => onChangePengaduan(value, 'jenisProduk')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Jenis" style={styles.gender} />
            <Picker.Item label="Jasa" value="Jasa" style={styles.gender} />
            <Picker.Item label="Barang" value="Barang" style={styles.gender} />
          </Picker>
        </View>
        <Text>Kategori Produk</Text>
        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.detailProduk}
            onValueChange={(value) => onChangePengaduan(value, 'detailProduk')}
            style={{
              color: '#000',
            }}>
            {/* barang */}
            <Picker.Item label="Pilih Detail Produk" style={styles.gender} />
            <Picker.Item label="Elektronika dan Telematika" value="Barang" style={styles.gender} />
            <Picker.Item label="Perumahan / Property" value="Barang" style={styles.gender} />
            <Picker.Item label="Bahan bakar  / gas" value="Barang" style={styles.gender} />
            <Picker.Item label="Tekstil dan produk tekstil" value="Barang" style={styles.gender} />
            <Picker.Item label="lain - lain" value="Barang" style={styles.gender} />
            {/* jasa */}
            <Picker.Item label="PLN" value="Jasa" style={styles.gender} />
            <Picker.Item label="PDAM" value="Jasa" style={styles.gender} />
            <Picker.Item label="Telkomunikasi" value="Jasa" style={styles.gender} />
            <Picker.Item label="Transportasi udara, darat, laut" value="Jasa" style={styles.gender} />
            <Picker.Item label="Jasa Pengiriman" value="Jasa" style={styles.gender} />
            <Picker.Item label="Layanan Kesehatan" value="Jasa" style={styles.gender} />
            <Picker.Item label="Perparkiraan" value="Jasa" style={styles.gender} />
            <Picker.Item label="lain - lain" value="Jasa" style={styles.gender} />
          </Picker>
        </View>
        <FormPengaduan placeholder="Kode Pos" value={PengaduanReducer.formPengaduan.merkDagang} onChangeText={(value) => onChangePengaduan(value, 'merkDagang')} />
        <FormPengaduan placeholder="Type" value={PengaduanReducer.formPengaduan.type} onChangeText={(value) => onChangePengaduan(value, 'type')} />
        <Text>Jenis Pengaduan</Text>
        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.jenisPengaduan}
            onValueChange={(value) => onChangePengaduan(value, 'jenisPengaduan')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Jenis" style={styles.gender} />
            <Picker.Item label="Standar" value="standar" style={styles.gender} />
            <Picker.Item label="Label" value="label" style={styles.gender} />
            <Picker.Item label="Pentunjuk Penggunaan" value="pentunjukPenggunaan" style={styles.gender} />
            <Picker.Item label="Pelayanan Purna Jual" value="pelayananPurnaJual" style={styles.gender} />
            <Picker.Item label="Cara Menjual" value="caraMenjual" style={styles.gender} />
            <Picker.Item label="Pengiklanan /  Promosi" value="pengiklanan" style={styles.gender} />
            <Picker.Item label="Klausula Baku" value="klausulaBaku" style={styles.gender} />
            <Picker.Item label="lain - lain" value="lainLain" style={styles.gender} />
          </Picker>
        </View>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
          }}>
          Tanggal Kejadian
        </Text>
        <View style={styles.date}>
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
          {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onChange()} />}
        </View>
        <FormPengaduan placeholder="Lokasi Kejadian" value={PengaduanReducer.formPengaduan.tempatLokasiKejadian} onChangeText={(value) => onChangePengaduan(value, 'tempatLokasiKejadian')} />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            marginBottom: 10,
          }}>
          Bukti - Bukti
        </Text>
        <FormPengaduan placeholder="Bukti Pembelian" value={PengaduanReducer.formPengaduan.bukti} onChangeText={(value) => onChangePengaduan(value, 'bukti')} />
        <FormPengaduan placeholder="Saksi" value={PengaduanReducer.formPengaduan.saksi} onChangeText={(value) => onChangePengaduan(value, 'saksi')} />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            color: COLORS.secondary2,
          }}>
          *Saksi Jika ada
        </Text>
        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.kerugian}
            onValueChange={(value) => onChangePengaduan(value, 'kerugian')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Jenis" style={styles.gender} />
            <Picker.Item label="Material" value="Material" style={styles.gender} />
            <Picker.Item label="Fisik" value="Fisik" style={styles.gender} />
            <Picker.Item label="Psikis" value="Psikis" style={styles.gender} />
          </Picker>
        </View>
        <FormPengaduan placeholder="Jelaskan dari Kerugian" value={PengaduanReducer.formPengaduan.inputKerugian} onChangeText={(value) => onChangePengaduan(value, 'inputKerugian')} />
        <FormPengaduan placeholder="Bentuk Kerugian" value={PengaduanReducer.formPengaduan.kerugian} onChangeText={(value) => onChangePengaduan(value, 'kerugian')} />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.regular,
            color: COLORS.secondary2,
          }}>
          JENIS TUNTUTAN
        </Text>

        <View style={styles.pickerStyle}>
          <Picker
            selectedValue={PengaduanReducer.formPengaduan.jenisTuntutan}
            onValueChange={(value) => onChangePengaduan(value, 'jenisTuntutan')}
            style={{
              color: '#000',
            }}>
            <Picker.Item label="Pilih Jenis" style={styles.gender} />
            <Picker.Item label="Pengembalian Uang" value="pengembalianUang" style={styles.gender} />
            <Picker.Item label="Penggantian Barang dan / atau Jasa yang sejenis atau setara nilainya" value="PenggantianJasaAtauBarang" style={styles.gender} />
            <Picker.Item label="Perawatan Kesehatan" value="perawatanKesehatan" style={styles.gender} />
            <Picker.Item label="Pemberian Santunan" value="pemberianSantunan" style={styles.gender} />
            <Picker.Item label="Lain-lain" value="lainLain" style={styles.gender} />
          </Picker>
        </View>
        <FormPengaduan placeholder="KRONOLOGIS PENGADUAN" height={100} value={PengaduanReducer.formPengaduan.kronologiPengaduan} onChangeText={(value) => onChangePengaduan(value, 'kronologiPengaduan')} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <RectButton title="Submit" handlePress={sendData} backgroundColor={COLORS.primary2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headers: {
    width: 400,
    height: 60,
    backgroundColor: COLORS.primary3,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gender: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  date: {
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
  },
});

export default Pengaduan;
