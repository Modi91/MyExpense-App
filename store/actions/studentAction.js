import axios from "axios";
import * as actionTypes from "./actionTypes";
import { order } from "./orderActions";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/"
  // baseURL: "http://172.20.10.4:30/api/"

  //  baseURL: "http://172.20.10.2:30/api/"
  baseURL: "http://172.20.10.2:30/api"

});

export const fetchStudentDetail = (studentUrl, navigation) => {
  return async dispatch => {
    try {
      console.log("studentUrl ===> ", studentUrl);
      const res = await axios.get(studentUrl);
      const student = res.data;
      // console.log("studen Action Detail ===> ", student);
      // console.log("navigation Action Detail ===> ", navigation);
      dispatch({
        type: actionTypes.FETCH_STUDENT_DETAIL,
        payload: student
      });
      dispatch(order(student.id));
      navigation.replace("Menu");

      // console.log("student detail action", student);
    } catch (err) {
      console.error("Error while fetching a student", err);
    }
  };
};
