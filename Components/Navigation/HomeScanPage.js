import { createStackNavigator } from "react-navigation";
import { zoomIn } from 'react-navigation-transitions';
import Menu from "../../Components/Menu";
import StudentScan from "../StudentScan";
import HomePage from "../Homepage";
const HomeScanPage = createStackNavigator(
  {
    HomePage: HomePage,
    StudentScan: StudentScan,
    Menu: Menu,
  },
  {
    initialRouteName: "HomePage",
    transitionConfig:() => zoomIn(1500),
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

export default HomeScanPage;
