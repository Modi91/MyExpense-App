import { createStackNavigator } from "react-navigation";

import Login from "../Authntication/Login";
import Menu from "../../Components/Menu";
import StudentScan from "../StudentScan";
import StudentDetail from "../StudentDetail";
import HomePage from "../Homepage";
const AuthStack = createStackNavigator(
  {
    Login: Login,
    HomePage: HomePage,
    Menu: Menu,
    StudentScan: StudentScan,
    StudentDetail: StudentDetail
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(84, 97, 112)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
