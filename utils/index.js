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
