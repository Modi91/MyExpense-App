import { createStackNavigator } from "react-navigation";

import Homepage from "../Homepage";
import StudentList from "../Student/StudentList/index";

const StudentStack = createStackNavigator(
  {
    Home: Homepage,
    StudentList: StudentList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(95, 130, 182)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StudentStack;
