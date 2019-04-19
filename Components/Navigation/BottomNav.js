import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Student: StudentStack
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
          case "Student":
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
      activeTintColor: "rgb(247, 240, 42)",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(248, 249, 250)"
      }
    }
  }
);

export default BottomNav;
