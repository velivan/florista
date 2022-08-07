import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyStyle from "../MyStyle";
import { MyFont } from "../MyStyle";
import { immg } from "../../assets/img/flowers/liliya.jpg";

import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";

export default function MyItem() {
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
    <Animated.View style={styles.myItem}>
      <ImageBackground
        source={require("../../assets/img/flowers/liliya.jpg")}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20 }}
        style={styles.myItemImg}
      >
        <Text style={styles.myItemTitle}>Pослина</Text>
      </ImageBackground>
    </Animated.View>
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
  myItem: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 10,
    width: 150,
    borderRadius: 20,
    shadowRadius: 10,
    shadowOpacity: 0.1,

    marginBottom: 30,
    marginLeft: 20,
    opacity: FadeOpacity,
    left: FadeLeft,
  },
  myItemImg: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 20,
  },

  myItemTitle: {
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 18,
    fontFamily: "RobotoMedium",
    backgroundColor: MyStyle.color.colorStrong,
    color: MyStyle.color.colorLight,
  },
});
