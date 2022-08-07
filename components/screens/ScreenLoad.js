
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
} from "react-native";

export default function ScreenLoad() {
  
   
  return (
    <View style={styles.container}>
    <ActivityIndicator size="large" color="rgb(62, 82, 65)" hidesWhenStopped="true" />
      <Text>Завантаження</Text>

    </View>
  );
}

const colorLight = "rgb(239, 250, 233)";
const colorStrong = "rgb(62, 82, 65)";
const colorMidle = "rgb(166, 182, 158)";

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
    backgroundColor: "rgb(239, 250, 233)",
  },
});
