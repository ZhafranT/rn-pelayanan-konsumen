export const setFormRegis = (input, value) => {
  return { type: 'SET_FORM_REGISTER', inputType: input, inputValue: value };
};

export const setFormLogin = (input, value) => {
    return { type: 'SET_FORM_LOGIN', inputType: input, inputValue: value };
  };