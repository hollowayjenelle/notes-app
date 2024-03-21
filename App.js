import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-semibold": require("./assets/fonts/Poppins-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
