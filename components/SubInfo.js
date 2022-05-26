import { View, Text, Image } from 'react-native';

import { SIZES, FONTS, SHADOWS, COLORS, assets, UupkData } from '../constants';

export const NewsTitle = ({ title, description, titleSize, descriptionSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: '#000',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: descriptionSize,
          color: COLORS.gray,
        }}>
        {description}
      </Text>
    </View>
  );
};

export const UupkItem = ({ title, description }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: '#000',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: descriptionSize,
          color: COLORS.gray,
        }}>
        {description}
      </Text>
    </View>
  );
};
