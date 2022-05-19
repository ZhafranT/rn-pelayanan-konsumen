import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { FocusStatusBar, NewsItem } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, CarouselData } from '../constants';

const News = () => {
  const [news, setNews] = useState(CarouselData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.gray} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.primary1,
          borderRadius: 10,
          marginVertical: 20,
          marginHorizontal: 10,
          ...SHADOWS.dark,
        }}>
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.medium,
          }}>
          News Today
        </Text>
      </View>
      <View>
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsItem data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          // style={{

          // }}
        />
      </View>
    </SafeAreaView>
  );
};

export default News;
