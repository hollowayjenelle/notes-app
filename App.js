import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "./styles/global";
import AppStack from "./routes/AppStack";

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
  return <AppStack onLayout={onLayoutRootView} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
