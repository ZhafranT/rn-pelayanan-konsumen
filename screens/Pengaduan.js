import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Fontisto } from '@expo/vector-icons';
import { CommonActions, StackActions } from '@react-navigation/native';
import { FocusStatusBar, FormPengaduan, RectButton } from '../components';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setFormPengaduan } from '../redux';
import { insertpengaduan } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
const Successpengaduan = '../assets/images/successpengaduan.png';

const Pengaduan = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [textDate, setTextDate] = useState('mm/dd/yyyy');
  const [textDate2, setTextDate2] = useState('mm/dd/yyyy');
  const [isLoading, setisLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);

  useEffect(() => {}, []);

  const PengaduanReducer = useSelector((state) => state.pengaduanReducer);
  const dispatch = useDispatch();

  const onChangePengaduan = (value, input) => {
    dispatch(setFormPengaduan(input, value));
  };

  const sendData = async () => {
    setisLoading(true);
    const dataPengaduan = PengaduanReducer.formPengaduan;
    // console.log('data masuk : ', dataPengaduan);
    const uid = await AsyncStorage.getItem('USER_ID');
    const sample = {
      user_id: uid,
      alamat: dataPengaduan.alamat,
      // alamatPelakuUsah: dataPengaduan.alamatPelakuUsah,
      buktiPembelian: dataPengaduan.buktiPembelian,
      detailProduk: dataPengaduan.detailProduk,
      email: dataPengaduan.email,
      inputKerugian: dataPengaduan.inputKerugian,
      jenisKelamin: dataPengaduan.jenisKelamin,
      jenisPengaduan: dataPengaduan.jenisPengaduan,
      jenisProduk: dataPengaduan.jenisProduk,
      jenisTuntutan: dataPengaduan.jenisTuntutan,
      kerugian: dataPengaduan.kerugian,
      kodePos: dataPengaduan.kodePos,
      kodePosPelakuUsaha: dataPengaduan.kodePosPelakuUsaha,
      kotaKabupaten: dataPengaduan.kotaKabupaten,
      kotaKabupatenPelakuUsaha: dataPengaduan.kotaKabupatenPelakuUsaha,
      kronologisPengaduan: dataPengaduan.kronologisPengaduan,
      merkDagang: dataPengaduan.merkDagang,
      nama: dataPengaduan.nama,
      noIdentitas: dataPengaduan.noIdentitas,
      provinsi: dataPengaduan.provinsi,
      provinsiPelakuUsaha: dataPengaduan.provinsiPelakuUsaha,
      saksi: dataPengaduan.saksi,
      tanggalLahir: moment(new Date(dataPengaduan.tanggalLahir)).format('YYYY-MM-DD'),
      telepon: dataPengaduan.telepon,
      teleponPelakuUsaha: dataPengaduan.teleponPelakuUsaha,
      tempatLokasiKejadian: dataPengaduan.tempatLokasiKejadian,
      type: dataPengaduan.type,
      alamatTempatBarangJasa: dataPengaduan.alamatTempatBarangJasa,
      kerugianMaterial: dataPengaduan.kerugianMaterial == undefined ? '-' : dataPengaduan.kerugianMaterial,
      kerugianFisik: dataPengaduan.kerugianFisik == undefined ? '-' : dataPengaduan.kerugianFisik,
      kerugianPsikis: dataPengaduan.kerugianPsikis == undefined ? '-' : dataPengaduan.kerugianPsikis,
      waktuKejadianDitemukan: moment(new Date(dataPengaduan.waktuKejadianDitemukan)).format('YYYY-MM-DD'),
    };
    // const sample = {
    //   "alamat": "jakarta raya",
    //   "alamatPelakuUsah": "Jakarta Raya",
    //   "alamatTempatBarangJasa": "-",
    //   "bukti": "ga ada",
    //   "detailProduk": "Barang",
    //   "email": "febio@gmail.com",
    //   "inputKerugian": "rusak nih",
    //   "jenisKelamin": "pria",
    //   "jenisPengaduan": "lainLain",
    //   "jenisProduk": "Jasa",
    //   "jenisTuntutan": "pengembalianUang",
    //   "kerugian": "Fisik",
    //   "kerugianFisik": "-",
    //   "kerugianMaterial": "-",
    //   "kerugianPsikis": "-",
    //   "kodePos": "13450",
    //   "kodePosPelakuUsaha": "13450",
    //   "kotaKabupaten": "Jakarta Timur",
    //   "kotaKabupatenPelakuUsaha": "Jakarta Timur",
    //   "kronologiPengaduan": "barang rusak pas unboxing",
    //   "merkDagang": "13450",
    //   "nama": "febio",
    //   "noIdentitas": "1234512345123456",
    //   "provinsi": "DKI Jakarta",
    //   "provinsiPelakuUsaha": "DKI Jakarta",
    //   "saksi": "ga ada",
    //   "tanggalLahir": "1999-06-20",
    //   "telepon": "087787666222",
    //   "teleponPelakuUsaha": "087787666555",
    //   "tempatLokasiKejadian": "rumah",
    //   "type": "ga tau",
    //   "user_id": "64",
    //   "waktuKejadianDitemukan": "2022-06-01",
    // }
    console.log(sample);
    const { data, message } = await insertpengaduan(sample);
    if (message == 200) {
      // handle 200
      setisLoading(false);
      console.log('Pengaduan', data);
      setisSuccess(true);
      // setTimeout(() => {
      //   navigation.navigate('Login');
      // }, 2000);
    } else if (message == 400) {
      // handle 400
      console.log('Pengaduan gagal', data);
      setisLoading(false);
      // setmainerrmmsg(data)
    } else if (message == 500) {
      // handle 500
      console.log('Pengaduan gagal', data);
      setisLoading(false);
    } else {
      // no interner
      console.log('Pengaduan no internet', data);
      setisLoading(false);
    }
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getMonth() + 1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();

    setTextDate(fDate);
    onChangePengaduan(fDate, 'tanggalLahir');
    // dispatch(setFormPengaduan(tempDate, fDate));
  };

  const onChange2 = (event, selectedDate) => {
    setShow2(false);
    const currentDate = selectedDate || date2;
    // setShow(Platform.OS === 'ios');
    setDate2(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getMonth() + 1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();

    setTextDate2(fDate);
    onChangePengaduan(fDate, 'waktuKejadianDitemukan');
    // dispatch(setFormPengaduan(tempDate, fDate));
  };

  const showMode = () => {
    setShow(true);
  };

  const showMode2 = () => {
    setShow2(true);
  };

  const navigatehome = () => {
    navigation.goBack();
  };

  const navigatestatus = () => {
    navigation.dispatch(StackActions.replace('Navilogin', { screen: 'Status' }));
  };

  return isSuccess != true ? (
    isLoading == false ? (
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
            <TouchableOpacity onPress={() => showMode()}>
              <Fontisto name="date" size={24} color="black" />
            </TouchableOpacity>
            {show && <DateTimePicker value={date} mode={mode} display="default" onChange={onChange} />}
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

          <FormPengaduan placeholder="Alamat" height={100} value={PengaduanReducer.formPengaduan.alamatTempatBarangJasa} onChangeText={(value) => onChangePengaduan(value, 'alamatTempatBarangJasa')} />
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
          <FormPengaduan placeholder="Merk Dagang" value={PengaduanReducer.formPengaduan.merkDagang} onChangeText={(value) => onChangePengaduan(value, 'merkDagang')} />
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
              {textDate2}
            </Text>
            <TouchableOpacity onPress={() => showMode2()}>
              <Fontisto name="date" size={24} color="black" />
            </TouchableOpacity>
            {show2 && <DateTimePicker value={date2} mode={mode} display="default" onChange={onChange2} />}
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
          <FormPengaduan placeholder="Bukti Pembelian" value={PengaduanReducer.formPengaduan.buktiPembelian} onChangeText={(value) => onChangePengaduan(value, 'buktiPembelian')} />
          <FormPengaduan placeholder="Saksi" value={PengaduanReducer.formPengaduan.saksi == undefined ? 'Tidak ada saksi' : PengaduanReducer.formPengaduan.saksi} onChangeText={(value) => onChangePengaduan(value, 'saksi')} />
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.regular,
              color: COLORS.secondary2,
              marginTop: -10,
              marginBottom: 10,
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
              <Picker.Item label="Pilih Jenis Kerugian" style={styles.gender} />
              <Picker.Item label="Material" value="kerugianMaterial" style={styles.gender} />
              <Picker.Item label="Fisik" value="kerugianFisik" style={styles.gender} />
              <Picker.Item label="Psikis" value="jenisTuntutan" style={styles.gender} />
            </Picker>
          </View>
          <FormPengaduan placeholder="Jelaskan dari Kerugian" value={PengaduanReducer.formPengaduan.inputKerugian} onChangeText={(value) => onChangePengaduan(value, 'inputKerugian')} />
          {/* <FormPengaduan placeholder="Bentuk Kerugian" value={PengaduanReducer.formPengaduan.kerugian} onChangeText={(value) => onChangePengaduan(value, 'kerugian')} /> */}

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
          <FormPengaduan placeholder="KRONOLOGIS PENGADUAN" height={100} value={PengaduanReducer.formPengaduan.kronologisPengaduan} onChangeText={(value) => onChangePengaduan(value, 'kronologisPengaduan')} />
          <View
            style={{
              height: 30,
            }}
          />
        </ScrollView>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <RectButton title="Submit" handlePress={sendData} backgroundColor={COLORS.primary2} />
        </View>
      </SafeAreaView>
    ) : (
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
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Loading...
        </Text>
      </SafeAreaView>
    )
  ) : (
    <Success navigatehome={navigatehome} navigatestatus={navigatestatus} />
  );
};

const Success = ({ navigatehome, navigatestatus }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Image
          style={{
            alignSelf: 'center',
            width: 150,
            height: 150,
            resizeMode: 'cover',
          }}
          source={require(Successpengaduan)}></Image>
        <View style={{ padding: 10 }}></View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}>
          Data yang anda masukan{'\n'}sukses diinput
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
          }}>
          Pihak terkait akan memeriksa laporan anda
        </Text>
        <View style={{ padding: 10 }}></View>
        <View
          style={{
            padding: 10,
          }}>
          <TouchableOpacity onPress={navigatehome}>
            <Text
              style={{
                borderRadius: 8,
                padding: 20,
                textAlign: 'center',
                backgroundColor: '#17C3B2',
              }}>
              Kembali ke Home
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <TouchableOpacity onPress={navigatestatus}>
            <Text
              style={{
                borderRadius: 8,
                padding: 20,
                textAlign: 'center',
                backgroundColor: '#FFCB77',
              }}>
              Lihat Status Pengaduan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
