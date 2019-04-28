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

  async componentDidMount() {
    await this.props.checkForToken();
    if (this.props.user){
      console.log("User ===>", this.props.user)
      this.props.navigation.replace("HomeScanPage");
    }
  }
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
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
    dispatch(actionCreators.login(userData, navigation)),
  checkForToken: () =>
    dispatch(actionCreators.checkForExpiredToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
