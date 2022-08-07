import React, { useEffect, useState, useRef } from "react";
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
  FlatList,
} from "react-native";

export default ExplorItem = () => {
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



  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://62ef541df5521ecad58104ec.mockapi.io/Flowers"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 

  function getContent(){
    return (
      <View>
      {data.map((i) => {
        <Animated.View style={styles.explorItem}>
        {console.log(i.id)}
          <Image source={{ uri: i.img }} style={styles.itemImg} />
          <View>
            <Text style={styles.explorItemTitle}>{i.name}</Text>
            <Text style={styles.explorItemText}>{i.text}</Text>
          </View>
        </Animated.View>;
      })}
      </View>
    )
  }
  useEffect(() => {
    getPost();
    getContent();
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          
         {getContent()}
        </View>
      )}
    </View>
  );
};

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
