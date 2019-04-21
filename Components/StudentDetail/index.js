// import React, { Component } from "react";
import { connect } from "react-redux";
// import { Text, View, Button, Icon } from "native-base";
// import { Image } from "react-native";
import * as actionCreators from "../../store/actions";

// class StudentDetail extends Component {
//   componentDidMount() {
//     // this.props.fetchStudentDetail(this.props.match.params.studentID);
//   }

//   render() {
//     // let student = {};
//     // if (
//     //   this.props.students.find(
//     //     student => student.id == this.props.match.params.studentID
//     //   )
//     // ) {
//     //   student = this.props.students.find(
//     //     student => student.id == this.props.match.params.studentID
//     //   );
//     let student = {};
//     if (this.props.loading) {
//       return (student = <div />);
//     } else {
//       student = this.props.student;
//       console.log("student detail", student.parent);
//       return (
//         <View className="container card my-3">
//           <View className="row justify-content-md-center my-2">
//             <View className="col-3">
//               <Image
//                 style={{ height: "85%", width: "100%" }}
//                 className="card-img-top my-3"
//                 source={{ uri: "student.image" }}
//               />
//             </View>

//             <View className="col-md-4 my-4 card">
//               <Text className="card-title my-2"> {student.name}</Text>
//               <Text className="card-text">{student.grade}</Text>
//               <Text className="card-text">Health:{student.health}</Text>
//               <Text className="card-text">
//                 Parent ID : {student.parent && student.parent.user.username}
//               </Text>
//               <Text className="card-text">Limit {student.limit}</Text>
//             </View>
//             {/* <p className="card-text">Wallet {student.parent.wallet}</p> */}
//           </View>
//         </View>
//       );
//     }
//   }
// }
import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
import { black } from "ansi-colors";
class StudentDetail extends Component {
  render() {
    student = this.props.student;
    return (
      <Card>
        <CardItem>
          <Body style={{ flexDirection: "row" }}>
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
            <Text
              style={{
                marginHorizontal: 5
              }}
            >
              {student.grade}
            </Text>
            <Text
              style={{
                marginHorizontal: 5
              }}
            >
              limit {student.limit}
            </Text>
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
