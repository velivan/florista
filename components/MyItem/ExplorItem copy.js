import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyStyle from "../MyStyle";
import { MyFont } from "../MyStyle";

import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
} from "react-native";

export default function ExplorItem(props) {
  function shoter(text) {
    return text.slice(0, 80) + " ->";
  }

  const [loaded] = useFonts({
    Montserrat: require("../../assets/font/Montserrat-VariableFont_wght.ttf"),
    Brolink: require("../../assets/font/Brolink-Outline.ttf"),
    Kyiv: require("../../assets/font/KyivTypeSans-VarGX.ttf"),
    Typometry: require("../../assets/font/Typometry_Alternate.ttf"),
    RobotoBlack: require("../../assets/font/Roboto-Black.ttf"),
    RobotoMedium: require("../../assets/font/Roboto-Medium.ttf"),
    RobotoRegular: require("../../assets/font/Roboto-Regular.ttf"),
    RobotoThin: require("../../assets/font/Roboto-Thin.ttf"),
  });
  return (

        <View>
          {console.log(props.itemsApi.id)}
          <Animated.View style={styles.explorItem}>
            <Image source={{ uri: props.itemsApi.img }} style={styles.itemImg} />
            <View>
              <Text style={styles.explorItemTitle}>{props.itemsApi.name}</Text>
              <Text style={styles.explorItemText}>{props.itemsApi.text}</Text>
            </View>
          </Animated.View>
        </View>
    
  );
}

const FadeOpacity = new Animated.Value(0);
Animated.spring(FadeOpacity, {
  toValue: 1,
  duration: 1500,
  useNativeDriver: false,
  easing: Easing.out(Easing.exp),
}).start();
const FadeLeft = new Animated.Value(500);
Animated.spring(FadeLeft, {
  toValue: 0,
  duration: 1500,
  useNativeDriver: false,
  easing: Easing.out(Easing.exp),
}).start();

const styles = StyleSheet.create({
  explorItem: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    width: "90%",
    padding: 0,
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 20,
    opacity: FadeOpacity,
    top: FadeLeft,
  },
  explorItemTitle: {
    fontSize: 20,
    fontFamily: "RobotoMedium",
    color: MyStyle.color.colorStrong,
  },
  explorItemText: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    color: MyStyle.color.colorStrong,
    margin: "auto",
    maxWidth: "90%",
  },
  itemImg: {
    width: 55,
    height: 55,
    marginRight: 7,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
});
