import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Home from "./Home";
import Menu from './Menu';

export default (HomeNav = createStackNavigator({
  // Home: {
  //   screen: Home,
  //   navigationOptions: {
  //     title: "Projeto salão",
  //     headerTitleStyle: {
  //       textAlign: "center",
  //       flex: 1
  //     }
  //   }
  // },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
      // title: `Studio Priscila Andrade`,
      // headerTintColor: '#fff',
      // headerStyle: {
      //   backgroundColor: '#ff007f',
      // },
      // headerTitleStyle: {
      //   color: "#fff",
      //   fontSize: 20,
      // },
    }
  }
}));
