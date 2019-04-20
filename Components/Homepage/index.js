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
    await this.props.fetchItems()
  }
  render() {
    return (
    
        <></>

    );
  }
}



const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () =>
    dispatch(actionCreators.fetchItems())
});
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
