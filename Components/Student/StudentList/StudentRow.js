import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index";

import { Image, TouchableOpacity } from "react-native";
import {
  Text,
  Card,
  CardItem,
  Header,
  Icon,
  Content,
  ListItem
} from "native-base";

class StudentRow extends Component {
  state = {
    id: 0
  };
  render() {
    let student;
    if (this.props.loading) {
      student = <Text />;
    } else {
      student = this.props.student;
    }

    return (
      <TouchableOpacity>
        <Content>
          <ListItem>
            <Card style={{ hight: 600, flex: 3 }}>
              <CardItem>
                <Text
                  style={{
                    color: "rgb(155, 166, 87)",
                    fontWeight: "bold",
                    fontSize: 20,
                    position: "relative"
                  }}
                >
                  {student.name}
                </Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{
                    position: "relative",
                    color: "rgb(137, 137, 136)"
                  }}
                >
                  {student.grade}
                </Text>
              </CardItem>
            </Card>
          </ListItem>
        </Content>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading
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
)(StudentRow);
