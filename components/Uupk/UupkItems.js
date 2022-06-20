import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, LayoutAnimation, UIManager, Platform } from 'react-native';

import { assets, COLORS, SHADOWS, SIZES, FONTS, UupkData } from '../../constants';

const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={onClickFunction}>
        <Text style={styles.itemText}>{item.bab_id}</Text>
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {item.subCategory.map((item, key) => (
          <View key={key} style={styles.content}>
            <Text style={styles.text}>{item.val}</Text>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    </View>
  );
};

const UupkItems = ({ data }) => {
  const [multiSelect, setmultiSelect] = useState(false);
  const [listData, setlistData] = useState(data);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const arr = [...listData];
    if (multiSelect) {
      arr[index]['isExpanded'] = !arr[index]['isExpanded'];
    } else {
      arr.map((value, placeindex) => (placeindex === index ? (arr[placeindex]['isExpanded'] = !arr[placeindex]['isExpanded']) : (arr[placeindex]['isExpanded'] = false)));
    }
    setlistData(arr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>HALO</Text>
        <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)}>
          <Text style={styles.headerButton}>{multiSelect ? 'Single \n' : 'Multiple \n'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: 550,
        }}>
        {listData.map((item, key) => (
          <ExpandableComponent
            key={item.bab_id}
            item={item}
            onClickFunction={() => {
              updateLayout(key);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UupkItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: SIZES.large,
    fontFamily: FONTS.regular,
  },
  headerButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: SIZES.large,
  },
  item: {
    backgroundColor: COLORS.primary2,
    padding: 20,
    marginBottom: 5,
  },
  itemText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    marginBottom: 5,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLORS.secondary1,
  },
  text: {
    fontSize: SIZES.medium,
    paddingLeft: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: COLORS.gray,
    width: '100%',
  },
});
