import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { assets } from "../../constants";

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  const IconTab = () => {
    if (label === "Home")
      return isFocused ? "#673ab7" : <Image source={assets.home} />;
    if (label === "Status")
      return isFocused ? "#673ab7" : <Image source={assets.status} />;
    if (label === "Profile")
      return isFocused ? "#673ab7" : <Image source={assets.profile} />;

    return null;
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <Image />
        <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
