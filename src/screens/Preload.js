import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { checkLogin } from "../actions/AuthActions";

export class Preload extends Component {
  constructor(props) {
    super(props);
    this.verifyStatus = this.verifyStatus.bind(this);
  }

  componentDidMount() {
    this.props.checkLogin();
  }

  componentDidUpdate() {
    this.verifyStatus();
  }

  verifyStatus() {
    switch (this.props.status) {
      case 1:
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "HomeNav" })]
          })
        );
        break;
      case 2:
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Login" })]
          })
        );
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Carregando {this.props.status}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  text: {
    fontSize: 20,
    color: "#fff"
  }
});

const mapStateToProps = state => {
  return {
    status: state.auth.status
  };
};

export default connect(
  mapStateToProps,
  { checkLogin }
)(Preload);
