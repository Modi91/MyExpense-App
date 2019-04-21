import React, { Component } from "react";
import { Text, View, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { ImageBackground } from "react-native";
import * as actionCreators from "../../store/actions";

class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  async componentDidMount() {
    await this.props.fetchItems();
  }
  render() {
    return (
      <Button
        full
        onPress={() => this.props.navigation.replace("StudentScan")}
        style={{ backgroundColor: "rgb(95, 130, 182)" }}
      >
        <Text>Scan</Text>
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
