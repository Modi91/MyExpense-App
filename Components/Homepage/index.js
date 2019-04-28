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
      <View style={{flex: 1,
        justifyContent: 'center', // Used to set Text Component Vertically Center
        alignItems: 'center'}}>
          <Icon
            name="qrcode-scan"
            type="MaterialCommunityIcons"
            danger
            style={{
              color: "rgb(174, 139, 241)",
              fontSize:500
            }}
            onPress={() => this.props.navigation.navigate("StudentScan")}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchStudentDetail: (studentUrl, navigation) =>
      dispatch(actionCreators.fetchStudentDetail(studentUrl, navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
