import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const FormRegis = ({ placeholder, ...rest }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={-150}
      style={{
        minHeight: 65,
        maxHeight: 85,
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

export const FormLogin = ({ placeholder, ...rest }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={-150}
      style={{
        minHeight: 65,
        maxHeight: 85,
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

export const FormPengaduan = ({ placeholder, height, ...rest }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={-150}
      style={{
        minHeight: 65,
        maxHeight: 85,
        flex: 1,
      }}>
      <TextInput style={[styles.textFormPengaduan, height && { height }]} placeholder={placeholder} {...rest} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textFormPengaduan: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 18,
  },
});
