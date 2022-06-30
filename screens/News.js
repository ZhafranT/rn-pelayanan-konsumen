import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { FocusStatusBar, NewsItem } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, CarouselData } from '../constants';
import { getnewsapi } from '../services/api';
import Toast from 'react-native-toast-message';

const News = ({navigation}) => {
  const [news, setNews] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getnewsdata()
  },[news])

  const getnewsdata = async () => {
    const {data,message} = await getnewsapi()
    if (message == 200) {
      // handle 200
      setNews(data.data)
    } else if (message == 400) {
      // handle 400
    } else if (message == 500) {
      // handle 500
    } else {
      // no interner
    }
    setisLoading(false)
  }

  const navigatedetail = (value) => {
    navigation.navigate('NewsDetail',{data: value})
  }

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
        <View style={{flex: 1}}>
          {isLoading == true ? (
            <NewsItem data={''} />
          ) : (
            news != null ? (
              <FlatList
                data={news}
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigatedetail(item)}>
                  <NewsItem data={item} />
                </TouchableOpacity>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <Text style={{
                textAlign: 'center'
              }}>No News for Today</Text>
            )
          )}
        </View>
    </SafeAreaView>
  );
};

export default News;
