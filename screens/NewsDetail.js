import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, ScrollView, LayoutChangeEvent } from 'react-native';
import { FocusStatusBar, NewsItem } from '../components';
import { assets, COLORS, SHADOWS, SIZES, FONTS, CarouselData } from '../constants';
import { getnewsapi } from '../services/api';
import Toast from 'react-native-toast-message';

const NewsDetail = ({ route, navigation }) => {
  const {data} = route.params;

  useEffect(() => {
  },[])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 30
      }}>{data.judulBerita}</Text>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{
          alignSelf: 'center',
          width: '90%',
          height: 200,
          backgroundColor: 'gray'
        }}
        >
          <Image source={{uri: data.photo}} resizeMode="cover" style={{flex: 1}}/>
        </View>
        <View style={{
          flex: 1,
          paddingTop: 30,
          paddingBottom: 30,
          alignSelf: 'center',
          width: '90%',
        }}>
          <Text>
            {data.isiBerita.replace(/\n|\r/g,' ')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;
