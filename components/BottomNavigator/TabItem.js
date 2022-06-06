import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { assets } from '../../constants';

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  const IconTab = () => {
    if (label === 'Home') return isFocused ? <Image source={assets.homeWhite} /> : <Image source={assets.home} />;
    if (label === 'Status') return isFocused ? <Image source={assets.reportWhite} style={styles.status} /> : <Image source={assets.status} style={styles.status} />;
    if (label === 'Profile') return isFocused ? <Image source={assets.peopleWhite} /> : <Image source={assets.profile} />;

    return isFocused ? <Image source={assets.peopleWhite} /> : <Image source={assets.profile} />;
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        <IconTab style={styles.icons} />
      </View>
      <Text style={{ color: isFocused ? '#ffff' : '#222' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
