import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import Reducers from "./src/Reducers";
import Preload from "./src/screens/Preload";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Forgot from "./src/screens/Forgot";
import HomeNav from "./src/screens/HomeNav";

console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  Preload: {
    screen: Preload,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0f6675"
      },
      headerTintColor: "#fff"
    }
  },
  Forgot: {
    screen: Forgot,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0f6675"
      },
      headerTintColor: "#fff"
    }
  },
  HomeNav: {
    screen: HomeNav,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
