import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigation } from "./src/navigation/stack-nav/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTab from "./src/layout/bottom-tab/index";
import Test from "./src/pages/test/index";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={({ navigation }) => <BottomTab navigation={navigation} />}
          tabBarOptions={{
            showLabel: false,

            style: {
              shadowOpacity: 0,
              elevation: 0,
              shadowOffset: {
                width: 0,
                height: 0,
              },
            },
            tabStyle: {
              shadowOpacity: 0,
              elevation: 0,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 0,
              },
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={StackNavigation}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name="home" size={size} color="#000" />
              ),
              showLabel: false,
            }}
          />
          <Tab.Screen
            name="Test"
            component={Test}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name="home" size={size} color="#000" />
              ),
              showLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
