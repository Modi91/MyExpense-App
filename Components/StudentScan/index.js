import * as actionCreators from "../../store/actions";

import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import Expo, { BarCodeScanner, Permissions } from "expo";
import { connect } from "react-redux";
class StudentScan extends React.Component {
  state = {
    hasCameraPermission: null,
    cameraDirection: "back"
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
            type={this.state.cameraDirection}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = result => {
    this.props.fetchStudentDetail(result.data, this.props.navigation);
  };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStudentDetail: (studentUrl, navigation) =>
      dispatch(actionCreators.fetchStudentDetail(studentUrl, navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(StudentScan);
