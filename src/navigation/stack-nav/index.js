import About from "../../pages/about";
import Home from "../../pages/home/index";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          shadowOpacity: 0,
          backgroundColor: "#fff",
        },
        cardShadowEnabled: false,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="_Home"
        component={Home}
        options={Home.navigationOptions}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};
