import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.auth.status
});

export default connect(
  mapStateToProps,
  {}
)(Home);
