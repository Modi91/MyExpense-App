import React, { Component } from "react";
import { Text, View, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { ImageBackground } from "react-native";
import * as actionCreators from "../../store/actions";

class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return <Text>Home Page</Text>;
  }
}

export default HomePage;
