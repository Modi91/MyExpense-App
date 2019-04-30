import React, { Component } from "react";
import { Text, View, Button, Icon, Card } from "native-base";
import { connect } from "react-redux";
import {Image} from "react-native"
import * as actionCreators from "../../store/actions";
import * as Animatable from "react-native-animatable";
// import style from "styles.css";
class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  async componentDidMount() {
    await this.props.fetchItems();
  }
  render() {
    return (
        <Animatable.View
          animation="bounce"
          easing="ease-out"
          iterationCount="infinite"
          style={{ flex: 1, textAlign: "center", marginTop:350}}
        >
        <View style={{
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
                // onPress = {() => this.props.fetchStudentDetail("http://172.20.10.9:70/api/student/1/detail/", this.props.navigation)}
              />
          </View>
      </Animatable.View>
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
