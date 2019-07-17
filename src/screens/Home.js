import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import CalendarPicker from "react-native-calendar-picker";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStartDate: null
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={{ flex: 1 }}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          startFromMonday={true}
        />

        <View>
          <Text>SELECTED: {startDate}</Text>
        </View>
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
