import { createStackNavigator } from "react-navigation";

import Login from "../Authntication/Login";
import Menu from "../../Components/Menu";
import Studen from "../../Components/StudentScan";
const AuthStack = createStackNavigator(
  {
    Login: Login,
    Menu: Menu,
    Studen: Studen,
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
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

export default AuthStack;
