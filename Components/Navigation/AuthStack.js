import { createStackNavigator } from "react-navigation";
import Login from "../Authntication/Login";
import HomeScanPage from "../Homepage";
import { zoomIn } from 'react-navigation-transitions';
import Menu from "../../Components/Menu";
import StudentScan from "../StudentScan";
const AuthStack = createStackNavigator(
  {
    Login: Login,
    HomeScanPage: HomeScanPage,
    StudentScan: StudentScan,
    Menu: Menu,
  },
  {
    transitionConfig:() => zoomIn(1500),
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "white"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
