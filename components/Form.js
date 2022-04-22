import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const FormRegis = ({ placeholder, ...rest }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={-80}
      style={{
        maxHeight: 86,
        flex: 1,
      }}>
      <TextInput
        style={{
          marginRight: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 18,
          fontSize: 18,
        }}
        placeholder={placeholder}
        {...rest}
      />
    </KeyboardAvoidingView>
  );
};

export const FormPengaduan = () => {
  return (
    <View>
      <Text>Input</Text>
    </View>
  );
};
