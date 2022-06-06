export const setFormRegis = (input, value) => {
  return { type: 'SET_FORM_REGISTER', inputType: input, inputValue: value };
};

export const setFormLogin = (input, value) => {
    return { type: 'SET_FORM_LOGIN', inputType: input, inputValue: value };
  };

export const setFormPengaduan = (input, value) => {
    return { type: 'SET_FORM_PENGADUAN', inputType: input, inputValue: value };
  };