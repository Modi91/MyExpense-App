import axios from "axios";
import * as actionTypes from "./actionTypes";
import { order } from "./orderActions";

const instance = axios.create({

  // baseURL: "http://127.0.0.1:8000/api/"
  // baseURL: "http://172.20.10.4:30/api/"
  baseURL: "http://172.20.10.2:30/api"
});

export const fetchStudentsList = () => {
  return async dispatch => {
    try {
      const res = await instance.get("students/list/");
      const studentsList = res.data;
      dispatch({
        type: actionTypes.FETCH_ALL_STUDENTS,
        payload: studentsList
      });
      console.log("student action", studentsList);
    } catch (err) {
      console.error("Error while fetching the students", err);
    }
  };
};

export const fetchStudentDetail = (studentUrl, navigation) => {
  return async dispatch => {
    try {
      console.log("studentUrl ===> ", studentUrl);
      const res = await axios.get(studentUrl);
      const student = res.data;
      console.log("studen Action Detail ===> ", student);
      console.log("navigation Action Detail ===> ", navigation);
      dispatch({
        type: actionTypes.FETCH_STUDENT_DETAIL,
        payload: student
      });

      navigation.replace("Menu");

      console.log("student detail action", student);
    } catch (err) {
      console.error("Error while fetching a student", err);
    }
  };
};

export const addStudent = (studentData, history) => {
  const formData = new FormData();
  formData.append("parent_id", studentData.parent_id);
  formData.append("email", studentData.email);
  formData.append("name", studentData.name);
  formData.append("grade", studentData.grade);
  formData.append("limit", studentData.limit);
  formData.append("health", studentData.health);
  console.log("studentData.image_file.name", studentData.image_file.name);
  if (studentData.image_file !== "") {
    formData.append("image", studentData.image_file);
  }
  return async dispatch => {
    try {
      const res = await instance.post("student/add/", formData);
      const newStudent = res.data;
      dispatch({
        type: actionTypes.STUDENT_ADD,
        payload: newStudent
      });
      history.push("/students");
    } catch (err) {
      console.error("Error while adding a student", err);
      if (err.response) console.error(err.response.data);
    }
  };
};

export const updateStudent = (studentData, history) => {
  const formData = new FormData();
  formData.append("parent_id", studentData.parent_id);
  formData.append("email", studentData.email);
  formData.append("name", studentData.name);
  formData.append("grade", studentData.grade);
  formData.append("limit", studentData.limit);
  formData.append("health", studentData.health);
  if (studentData.image_file !== "") {
    formData.append("image", studentData.image_file);
  }
  return async dispatch => {
    try {
      const res = await instance.put(
        `student/${studentData.id}/update/`,
        formData
      );
      const updatedStudent = res.data;
      dispatch(fetchStudentsList());
      dispatch({
        type: actionTypes.STUDENT_UPDATE,
        payload: updatedStudent
      });
      history.push("/students");
    } catch (err) {
      console.error("Error while updating a student", err);
    }
  };
};

export const deleteStudent = (studentID, history) => {
  history.push("/students");
  return async dispatch => {
    try {
      const res = await instance.delete(`student/${studentID}/delete/`);
      const deletedStudent = res.data;
      dispatch({
        type: actionTypes.STUDENT_DELETE,
        payload: studentID
      });
    } catch (err) {
      console.error("Error while delete a student", err);
    }
  };
};
