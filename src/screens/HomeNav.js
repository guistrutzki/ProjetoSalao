import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Home from "./Home";

export default (HomeNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Projeto salão",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
}));
