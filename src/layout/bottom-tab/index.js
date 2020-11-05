import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BottomTab(props) {
  const { navigation } = props;
  console.log({ navigation, props });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          onPress={() => {
            navigation.navigate("Test");
          }}
        >
          Test
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "5%",
  },
});
