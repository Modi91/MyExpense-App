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
      <Button transparent>
        <Icon
          name="qrcode-scan"
          type="MaterialCommunityIcons"
          danger
          style={{
            color: "rgb(174, 139, 241)"
            // marginLeft: "50%",
            // marginTop: "70%",
            // fontSize: 200
          }}
          onPress={() => this.props.navigation.replace("StudentScan")}
        />
      </Button>
      //   onPress={() => this.props.navigation.replace("StudentScan")}
      //   style={{
      //     borderColor: "rgb(174, 139, 241)",
      //     width: "94%",
      //     marginLeft: "3%",
      //     marginTop: "45%"
      //   }}
      // >

      // <Text style={{ color: "black" }}>مسح البطاقة</Text>
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
