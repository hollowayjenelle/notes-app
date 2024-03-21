import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "./styles/global";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <View style={styles.container} onLayout={onLayoutRootView}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
