import { combineReducers } from 'redux';

const initialStateRegister = {
  formRegis: {
    nik: '',
    namaLengkap: '',
    email: '',
    alamat: '',
    noTelp: '',
    gender: '',
    password: '',
  },
};

const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_FORM_REGISTER') {
    return {
      ...state,
      formRegis: {
        ...state.formRegis,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStateLogin = {
  formLogin: {
    email: '',
    password: '',
  },
  isLogin: false,
};

const loginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM_LOGIN') {
    return {
      ...state,
      formLogin: {
        ...state.formLogin,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStatePengaduan = {
  formPengaduan: {
    nama: '',
    jenisKelamin: '',
    tanggalLahir: '',
    noIdentitas: '',
    telepon: '',
    email: '',
    alamat: '',
    provinsi: '',
    kotaKabupaten: '',
    kodePos: '',
    alamatPelakuUsah: '',
    teleponPelakuUsaha: '',
    provinsiPelakuUsaha: '',
    kotaKabupatenPelakuUsaha: '',
    kodePosPelakuUsaha: '',
    jenisProduk: '',
    detailProduk: '',
    merkDagang: '',
    type: '',
    jenisPengaduan: '',
    waktuKejadianDitemukan: '',
    tempatLokasiKejadian: '',
    bukti: '',
    saksi: '',
    kerugian: '',
    inputKerugian: '',
    jenisTuntutan: '',
    kronologiPengaduan: '',
  },
};

const pengaduanReducer = (state = initialStatePengaduan, action) => {
  if (action.type === 'SET_FORM_PENGADUAN') {
    return {
      ...state,
      formPengaduan: {
        ...state.formPengaduan,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducers = combineReducers({
  loginReducer,
  registerReducer,
  pengaduanReducer,
});

export default reducers;
