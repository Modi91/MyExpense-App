import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Input,
  Item,
  Content,
  Header,
  Container,
  View
} from "native-base";
import { ImageBackground } from "react-native";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    // if (this.props.user) {
    //   return this.props.navigation.navigate("Profile");
    //   return <Profile />;
    // } else {
    return (
      // <Animatable.View
      //   animation="fadeInRight"
      //   delay={1200}
      //   duration={700}
      // >
      // <ImageBackground
      //   source={{ uri: "../../assets/background.png" }}
      //   style={{
      //     position: "absolute",
      //     width: "400%",
      //     height: "400%",
      //     top: 0,
      //     left: 0
      //   }}
      // >
      <View>
        <List style={{ marginTop: 200 }}>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                    placeholder="username"
                  />
                </Item>

                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    placeholder="password"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            bordered
            rounded
            activeOpacity={0.5}
            onPress={() => this.props.login(this.state, this.props.navigation)}
            style={{
              borderColor: "rgb(174, 139, 241)",
              width: "94%",
              marginLeft: "3%"
            }}
          >
            <Text style={{ color: "rgb(174, 139, 241)", marginLeft: "45%" }}>
              تسجيل دخول
            </Text>
          </Button>
        </List>
      </View>
      // </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
