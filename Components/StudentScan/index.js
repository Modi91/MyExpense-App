import React, { Component } from "react";
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { BarCodeScanner, Permissions, Camera } from "expo";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class StudentScan extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    type: Camera.Constants.Type.front
  };
 
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      // LayoutAnimation.spring();
      this.props.fetchStudentDetail(result.data, this.props.navigation);
      // alert(result.data);
      //this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    return (
        <View style={styles.container}>
          {this.state.hasCameraPermission === null ? (
            <Text>Requesting for camera permission</Text>
          ) : this.state.hasCameraPermission === false ? (
            <Text style={{ color: "#fff" }}>
              Camera permission is not granted
            </Text>
          ) : (
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{
                height: "50%",
                width: "50%"
              }}
              type={this.state.type}
            />
          )}
          {/* Dimensions.get("window").height, */}

          {this._maybeRenderUrl()}

          <StatusBar hidden />
        </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      "Open this URL?",
      this.state.lastScannedUrl,
      [
        {
          text: "Yes",
          onPress: () => Linking.openURL(this.state.lastScannedUrl)
        },
        { text: "No", onPress: () => {} }
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(84, 97, 112)"
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(84, 97, 112)",
    padding: 15,
    flexDirection: "row"
  },
  url: {
    flex: 1
  },
  urlText: {
    color: "#fff",
    fontSize: 20
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButtonText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 18
  }
});

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
