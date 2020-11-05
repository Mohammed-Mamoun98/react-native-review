import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Home extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Login Page test a",
    TitleStyle: {
      color: "red",
    },
  });

  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate("About")}>
          textInComponent gfd sr
        </Text>
        <Icon name="home-outline" size={39} />
      </View>
    );
  }
}
