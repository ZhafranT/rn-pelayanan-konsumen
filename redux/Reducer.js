import { combineReducers } from 'redux';

const initialStateRegister = {
  title: 'jalan jalan di tepi pantai',
  desc: 'ini desc tentang saya  ',
};

const registerReducer = (state = initialStateRegister, action) => {
  return state;
};

const initialStateLogin = {
  info: 'tolong masukan pass',
  isLogin: true,
};

const loginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducers = combineReducers({
  loginReducer,
  registerReducer,
});

export default reducers;
