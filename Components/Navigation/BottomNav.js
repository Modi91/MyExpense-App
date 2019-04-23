import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
import Menu from "./StudentStack";
const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Menu: Menu
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "Menu":
            iconName = "home";
            iconType = "Entypo";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "rgb(196, 77, 88)",
      inactiveTintColor: "rgb(170, 179, 171)",
      style: {
        backgroundColor: "rgb(242, 242, 242)"
      }
    }
  }
);

export default BottomNav;
