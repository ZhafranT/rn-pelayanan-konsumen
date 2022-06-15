import AsyncStorage from '@react-native-async-storage/async-storage';

export const checklogin = async () => {
  const istrue = await AsyncStorage.getItem('IS_LOGIN');
  console.log('checklogin | istrue', istrue);
  if (istrue === 'true') {
    return true;
  } else {
    return false;
  }
};

export const checkobjectorno = (value) => {
  if (value != null || value != undefined) {
    console.log('checkobjectorno | value',value);
    if (typeof value === 'string') {
      return JSON.parse(value)
    } else {
      return value
    }
  }
};