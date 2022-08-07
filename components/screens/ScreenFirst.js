import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { useFonts } from "expo-font";
import imgBg from "../../assets/img/bg.jpg";
import { NativeRouter, Route, Link } from "react-router-native";

export default function ScreenFirst() {
  
  const [loaded] = useFonts({
    Montserrat: require("../../assets/font/Montserrat-VariableFont_wght.ttf"),
    Brolink: require("../../assets/font/Brolink-Outline.ttf"),
    Kyiv: require("../../assets/font/KyivTypeSans-VarGX.ttf"),
    Typometry: require("../../assets/font/Typometry_Alternate.ttf"),
  });

  if (!loaded) {
    return null;
  }
 
  return (

    <ImageBackground source={imgBg} resizeMode="cover" style={styles.BackImg}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.textTitle}>Florista</Text>
          <Text style={styles.textSubTitle}>
            Додаток для поливу та доглядом за рослинами
          </Text>
        </View>

        <Animated.View style={styles.containerBottom}>
          <View style={styles.modalFade}>
            <Text>Hello</Text>

            <Animated.View style={styles.animBtn}>
              <Link to="/main" style={styles.button}>
                <Text style={styles.textBtn}>Hello</Text>
              </Link>
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const colorLight = "rgb(239, 250, 233)";
const colorStrong = "rgb(62, 82, 65)";
const colorMidle = "rgb(166, 182, 158)";

function addafter() {
  return console.log("add after");
}

const FadeUpFast = new Animated.Value(100);
Animated.spring(FadeUpFast, {
  toValue: 0,
  duration: 10000,
  useNativeDriver: false,
  easing: Easing.out(Easing.exp),
}).start(addafter);
const FadeUp = new Animated.Value(0);
Animated.timing(FadeUp, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: false,
  easing: Easing.out(Easing.exp),
}).start();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  containerTop: {
    flex: 3,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  containerBottom: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    opacity: FadeUp,
    top: FadeUpFast,
  },
  BackImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  img: {
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 72,
    fontFamily: "Typometry",
    color: "white",
  },
  textSubTitle: {
    fontSize: 30,
    fontFamily: "Kyiv",
    color: "white",
    backgroundColor: colorStrong,
    paddingHorizontal: 5,
  },
  modalFade: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colorStrong,
  },
  animBtn: {
    top: FadeUpFast,
  },
  textBtn: {
    color: colorLight,
  },
});
