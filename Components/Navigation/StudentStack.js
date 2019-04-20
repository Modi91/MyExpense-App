import { createStackNavigator } from "react-navigation";

import Menu from "../Menu";

const StudentStack = createStackNavigator(
  {
    Menu: Menu,
  },
  {
    initialRouteName: "Menu",
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
