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
  Row
} from "native-base";
import { black } from "ansi-colors";
class StudentDetail extends Component {
  render() {
    student = this.props.student;
    return (
      <Card>
        <CardItem>
          <Body>
            <Row>
              <Text
                style={{
                  marginHorizontal: 5,
                  borderRightWidth: 5,
                  borderColor: "black",
                  borderStyle: "dotted",
                  borderRadius: 1
                }}
              >
                {student.name}
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  marginHorizontal: 5
                }}
              >
                {student.grade}
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  marginHorizontal: 5
                }}
              >
                limit {student.limit}
              </Text>
            </Row>
          </Body>
        </CardItem>
      </Card>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
