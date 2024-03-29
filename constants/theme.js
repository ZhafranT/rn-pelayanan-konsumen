export const COLORS = {
  primary1: '#227C9D',
  primary2: '#17C3B2',
  primary3: '#FFCB77',

  secondary1: '#FEF9EF',
  secondary2: '#FE6D73',

  white: '#FFF',
  gray: '#74858C',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: 'PoppinsBold',
  semiBold: 'PoppinsSemiBold',
  medium: 'PoppinsMedium',
  regular: 'PoppinsRegular',
  light: 'PoppinsExtraLight',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  superDark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1.3,
    shadowRadius: 9.25,

    elevation: 15,
  },
};
