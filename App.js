import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ScreenFirst from "./components/screens/ScreenFirst";
import ScreenLoad from "./components/screens/ScreenLoad";
import ScreenMain from "./components/screens/ScreenMain";

export default function App() {
  return (
    <View style={styles.main}>
      <ScreenMain />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
