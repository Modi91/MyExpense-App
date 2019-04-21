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
  Header
} from "native-base";

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
      <Content>
        <Header transparent />
        <List>
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
            full
            onPress={() => this.props.login(this.state, this.props.navigation)}
            style={{ backgroundColor: "rgb(95, 130, 182)" }}
          >
            <Text>Login</Text>
          </Button>
        </List>
        <Button
          full
          onPress={() => this.props.navigation.replace("StudentScan")}
          style={{ backgroundColor: "rgb(95, 130, 182)" }}
        >
          <Text>Scan</Text>
        </Button>
      </Content>
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
