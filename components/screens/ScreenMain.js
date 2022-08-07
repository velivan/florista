import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyStyle from "../MyStyle";
import { MyFont } from "../MyStyle";
import axios, { Axios } from "axios";
import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import MyItem from "../MyItem/MyItem";
import ExplorItem from "../MyItem/ExplorItem";

export default function ScreenMain() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get('https://62ef541df5521ecad58104ec.mockapi.io/Flowers')
  //   .then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;
  // console.log(post)

  const [items, setItems] = React.useState();
  React.useEffect(() => {
    axios
      .get("https://62ef541df5521ecad58104ec.mockapi.io/Flowers")
      .then(({ data }) => {
        setItems(data);
        return data;
      })
      .catch((err) => console.log(err));
  }, []);

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

  if (!loaded) {
    return null;
  }

  // {post.map((p)=>{
  //   return (<ExplorItem
  //   imgItem={p.img}
  //   itemName={p.name}
  //   itemtext={p.text}
  //   />)
  // })}
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <StatusBar style="light" />
        <Ionicons name="md-leaf" size={38} color={MyStyle.color.colorLight} />
        <Text style={styles.textLogo}>Florista</Text>

        <Ionicons name="md-menu" size={38} color={MyStyle.color.colorLight} />
      </View>
      <View style={styles.plan}>
        <Text style={styles.textTitle}>Мої рослини</Text>
        <View style={styles.MyItems}>
          <ScrollView horizontal={true}>
            <MyItem />
            <MyItem />
            <MyItem />
            <MyItem />
          </ScrollView>
        </View>
      </View>
      <View style={styles.explorBack}>
        <View style={styles.explor}>
          <Text style={styles.textTitle}>Explor</Text>
          <ScrollView>
          {items.map((e) => {
            return (
              <View>
              <ExplorItem id={e.id} iImg={e.img} iName={e.name} iText={e.text} />
              </View>
            );
          })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const FadeUpFast = new Animated.Value(100);
Animated.timing(FadeUpFast, {
  toValue: 0,
  duration: 1500,
  useNativeDriver: false,
  easing: Easing.out(Easing.exp),
}).start();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    backgroundColor: MyStyle.color.colorStrong,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  plan: {
    flex: 4,
    width: "100%",
    backgroundColor: MyStyle.color.colorMidle,
    borderBottomLeftRadius: 50,
  },
  explorBack: {
    flex: 8,
    width: "100%",
    backgroundColor: MyStyle.color.colorMidle,
  },
  explor: {
    flex: 8,
    width: "100%",
    backgroundColor: MyStyle.color.colorLight,
    borderTopRightRadius: 50,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "RobotoBlack",
    color: MyStyle.color.colorStrong,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  textLogo: {
    fontSize: 32,
    fontFamily: "Typometry",
    color: MyStyle.color.colorLight,
  },
  MyItems: {
    flex: 1,
    flexDirection: "row",
  },
});
