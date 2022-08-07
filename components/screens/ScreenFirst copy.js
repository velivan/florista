import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
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

export default function ScreenFirst()  {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/font/Montserrat-VariableFont_wght.ttf"),
    Brolink: require("../../assets/font/Brolink-Outline.ttf"),
    Kyiv: require("../../assets/font/KyivTypeSans-VarGX.ttf"),
    Typometry: require("../../assets/font/Typometry_Alternate.ttf"),
  });

  if (!loaded) {
    return null;
  }
  // componentWillMoun = () => {
  //   this.animVal = new Animated.Value(1);
  // }
  // componentDidMount = () => {
  //   Animated.timing(this.animVal, {
  //     toValue: 3,
  //     duration: 3000,
  //     easing: Easing.bounce
  //   }).start();
  // }
  // let animStyle = { opacity: this.animVal };

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])
  }
  return (
    <ImageBackground source={imgBg} resizeMode="cover" style={styles.BackImg}>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.textTitle}>Florista</Text>
          <Text style={styles.textSubTitle}>
            Додаток для поливу та доглядом за рослинами
          </Text>
          <StatusBar style="auto" />
        </View>
        <Text>Hello</Text>
        <View style={styles.containerBottom}>
          <View style={styles.modalFade}>
            <Text>Hello</Text>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Hello</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const colorLight = "rgb(239, 250, 233)";
const colorStrong = "rgb(62, 82, 65)";
const colorMidle = "rgb(166, 182, 158)";

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    opacity: 1,
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
  textBtn: {
    color: colorLight,
  },
});