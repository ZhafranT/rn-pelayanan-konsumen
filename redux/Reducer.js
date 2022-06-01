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
  isLogin: true,
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

const reducers = combineReducers({
  loginReducer,
  registerReducer,
});

export default reducers;
