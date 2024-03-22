import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import NotesDetails from "../screens/NotesDetails";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#83c5be" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Notes App",
          }}
        />
        <Stack.Screen
          name="Notes Details"
          component={NotesDetails}
          options={({ route }) => ({ title: route.params.noteTitle })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
