import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Fontisto } from '@expo/vector-icons';
import { CommonActions, StackActions } from '@react-navigation/native';
// import { launchImageLibrary } from 'react-native-image-picker';

import { FocusStatusBar, FormPengaduan, RectButton } from '../components';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setFormPengaduan } from '../redux';
import { insertpengaduan } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { checklogin } from '../utils';
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
  const [isLogin, setisLogin] = useState(checklogin());
  const [jasaorbarang, setjasaorbarang] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {}, [jasaorbarang]);

  const PengaduanReducer = useSelector((state) => state.pengaduanReducer);
  const dispatch = useDispatch();

  const onChangePengaduan = (value, input) => {
    if (input === 'jenisProduk') {
      if (value === 'Jasa') {
        setjasaorbarang('Jasa');
      } else if (value === 'Barang') {
        setjasaorbarang('Barang');
      } else {
        setjasaorbarang(null);
      }
    }
    dispatch(setFormPengaduan(input, value));
  };

  const sendData = async ({ navigation }) => {
    setisLoading(true);
    const dataPengaduan = PengaduanReducer.formPengaduan;
    // console.log('data masuk : ', dataPengaduan);
    const uid = await AsyncStorage.getItem('USER_ID');

    console.log('idasd', uid);
    const body = {
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

    const { data, message } = await insertpengaduan(body);

    if (message == 200) {
      // handle 200
      setisLoading(false);
      console.log('Pengaduan', data);
      console.log('pendgaduan berhasil', message);
      setisSuccess(true);
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

  /*  add image   */

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const images = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log('hasil img', images);

    if (!images.cancelled) {
      setImage(images.uri);
    }

    let imageUri = images ? `data:image/jpg;base64,${images.base64}` : null;
    onChangePengaduan(imageUri, 'buktiPembelian');
    console.log('form Data', imageUri);
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

  const idkonsumen = async () => {
    const x = await AsyncStorage.getItem('USER_ID');
    if (x != null) {
      console.log('id ', x);
      return true;
    } else {
      console.log('tidak ada id ', x);
      navigation.navigate('Akses');
      return false;
    }
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
      {idkonsumen() == true ? (
        null
      ) : isSuccess != true ? (
        isLoading == false ? (
          <View style={{ flex: 1 }}>
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
                  <Picker.Item label="Pilih Jenis" value="Pilih Jenis" style={styles.gender} />
                  <Picker.Item label="Jasa" value="Jasa" style={styles.gender} />
                  <Picker.Item label="Barang" value="Barang" style={styles.gender} />
                </Picker>
              </View>
              {jasaorbarang != null ? (
                <View style={{ flex: 1 }}>
                  <Text>Kategori Produk {jasaorbarang}</Text>
                  {jasaorbarang === 'Jasa' ? (
                    <View style={styles.pickerStyle}>
                      <Picker
                        selectedValue={PengaduanReducer.formPengaduan.detailProduk}
                        onValueChange={(value) => onChangePengaduan(value, 'detailProduk')}
                        style={{
                          color: '#000',
                        }}>
                        <Picker.Item label="PLN" value="PLN" style={styles.gender} />
                        <Picker.Item label="PDAM" value="PDAM" style={styles.gender} />
                        <Picker.Item label="Telkomunikasi" value="Telkomunikasi" style={styles.gender} />
                        <Picker.Item label="Transportasi udara, darat, laut" value="Transportasi udara, darat, laut" style={styles.gender} />
                        <Picker.Item label="Jasa Pengiriman" value="Jasa Pengiriman" style={styles.gender} />
                        <Picker.Item label="Layanan Kesehatan" value="Layanan Kesehatan" style={styles.gender} />
                        <Picker.Item label="Perparkiraan" value="Perparkiraan" style={styles.gender} />
                        <Picker.Item label="lain - lain" value="lain - lain" style={styles.gender} />
                      </Picker>
                    </View>
                  ) : jasaorbarang === 'Barang' ? (
                    <View style={styles.pickerStyle}>
                      <Picker
                        selectedValue={PengaduanReducer.formPengaduan.detailProduk}
                        onValueChange={(value) => onChangePengaduan(value, 'detailProduk')}
                        style={{
                          color: '#000',
                        }}>
                        <Picker.Item label="Pilih Detail Produk" style={styles.gender} />
                        <Picker.Item label="Elektronika dan Telematika" value="Elektronika dan Telematika" style={styles.gender} />
                        <Picker.Item label="Perumahan / Property" value="Perumahan / Property" style={styles.gender} />
                        <Picker.Item label="Bahan bakar  / gas" value="Bahan bakar  / gas" style={styles.gender} />
                        <Picker.Item label="Tekstil dan produk tekstil" value="Tekstil dan produk tekstil" style={styles.gender} />
                        <Picker.Item label="lain - lain" value="lain - lain" style={styles.gender} />
                      </Picker>
                    </View>
                  ) : null}
                </View>
              ) : null}
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
                  <Picker.Item label="Pentunjuk Penggunaan" value="Pentunjuk Penggunaan" style={styles.gender} />
                  <Picker.Item label="Pelayanan Purna Jual" value="Pelayanan PurnaJual" style={styles.gender} />
                  <Picker.Item label="Cara Menjual" value="Cara Menjual" style={styles.gender} />
                  <Picker.Item label="Pengiklanan /  Promosi" value="Pengiklanan" style={styles.gender} />
                  <Picker.Item label="Klausula Baku" value="KlausulaBaku" style={styles.gender} />
                  <Picker.Item label="lain - lain" value="Lain - Lain" style={styles.gender} />
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

              <RectButton title="Pick a Photo" handlePress={pickImage} backgroundColor={COLORS.gray} />
              <View style={{ height: 10 }} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
              <View style={{ height: 10 }} />
              {/* <FormPengaduan placeholder="Bukti Pembelian" value={PengaduanReducer.formPengaduan.buktiPembelian} onChangeText={(value) => onChangePengaduan(value, 'buktiPembelian')} /> */}
              <FormPengaduan placeholder="Saksi" value={PengaduanReducer.formPengaduan.saksi == undefined ? 'Tidak ada saksi' : PengaduanReducer.formPengaduan.saksi} onChangeText={(value) => onChangePengaduan(value, 'saksi')} />
              <Text
                style={{
                  fontSize: SIZES.medium,
                  fontFamily: FONTS.regular,
                  color: COLORS.secondary2,
                  marginTop: -10,
                  marginBottom: 10,
                }}>
                *Jika tidak ada tulis "tidak ada"
              </Text>

              <FormPengaduan placeholder="Kerugian Material" value={PengaduanReducer.formPengaduan.kerugianMaterial} onChangeText={(value) => onChangePengaduan(value, 'kerugianMaterial')} />
              <FormPengaduan placeholder="Kerugian Fisik" value={PengaduanReducer.formPengaduan.kerugianFisik} onChangeText={(value) => onChangePengaduan(value, 'kerugianFisik')} />
              <FormPengaduan placeholder="Kerugian Psikis" value={PengaduanReducer.formPengaduan.kerugianPsikis} onChangeText={(value) => onChangePengaduan(value, 'kerugianPsikis')} />
              <Text
                style={{
                  fontSize: SIZES.medium,
                  fontFamily: FONTS.regular,
                  color: COLORS.secondary2,
                  marginTop: -10,
                  marginBottom: 10,
                }}>
                *Jika tidak ada tulis "tidak ada"
              </Text>
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
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Loading...
            </Text>
          </View>
        )
      ) : (
        <Success navigatehome={navigatehome} navigatestatus={navigatestatus} />
      )}
    </SafeAreaView>
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

const GoToLogin = () => {
  return (
    <View>
      <Text>Tidak ada akses</Text>
    </View>
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
