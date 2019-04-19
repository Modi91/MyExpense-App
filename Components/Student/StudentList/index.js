import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import { Text, Container, Header, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import StudentRow from "./StudentRow";
class index extends Component {
  componentDidMount() {
    this.props.fetchStudentsList();
  }
  state = {
    id: 0
  };
  render() {
    let studentRow;
    if (this.props.loading) {
      studentRow = <div />;
    } else {
      studentRow = this.props.students.map(student => (
        <StudentRow key={student.id} student={student} />
      ));
    }
    return (
      <Container>
        <Text>List of student</Text>
        <ScrollView>
          <List>{studentRow}</List>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.studentReducer.loading,
    students: state.studentReducer.students
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStudentsList: () => dispatch(actionCreators.fetchStudentsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
