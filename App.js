import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import ScreenFirst from "./components/screens/ScreenFirst";
import ScreenLoad from "./components/screens/ScreenLoad";
import ScreenMain from "./components/screens/ScreenMain";
import { NativeRouter, Route, Link, Routes } from "react-router-native";

export default function App() {

  return (
    <NativeRouter>
          <View style={styles.main}>
            <Routes>
              <Route index element={<ScreenFirst />} />
              <Route path="/main" element={<ScreenMain />} />
              <Route path="/load" element={<ScreenLoad />} />
            </Routes>
          </View>
        </NativeRouter>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
