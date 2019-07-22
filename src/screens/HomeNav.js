import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Calendar from "./Calendar";
import Home from "./Home";

export default (HomeNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#5c146f"
      },
      title: "Agendar Horário",
      headerTitleStyle: {
        color: "#fff",
        textAlign: "center",
        flex: 1
      }
    }
  }
}));
