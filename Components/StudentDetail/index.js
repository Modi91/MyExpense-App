import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Row,
  View,
  Right,
  Left
} from "native-base";
import { black } from "ansi-colors";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

class StudentDetail extends Component {
  state = {
    allowedItems: []
  };

  ItemsNotAllowed = () => {
    student = this.props.student;
    xItems = student.not_allowed;
  };

  render() {
    student = this.props.student;
    return (
      <View>
        <CardItem>
          <Body>
            <Row>
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: 30,
                  marginTop: 20
                }}
              >
                أهلاً {student.name} ❤️
              </Animatable.Text>

              {/* <Text style={styles.container}>أهلاً {student.name} !</Text> */}
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Left>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 25
                  }}
                >
                  الحد اليومي {student.limit}
                </Text>
              </Left>
              <Right>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 25
                  }}
                >
                  {student.grade}
                </Text>
              </Right>
            </Row>
          </Body>
        </CardItem>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    student: state.studentReducer.student
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStudentDetail: studentID =>
      dispatch(actionCreators.fetchStudentDetail(studentID))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    fontSize: 24
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
