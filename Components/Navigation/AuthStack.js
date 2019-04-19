import { createStackNavigator } from "react-navigation";

import Login from "../Authntication/Login";
import Homepage from "../../Components/Homepage";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Homepage: Homepage
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
