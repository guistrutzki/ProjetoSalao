import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { connect } from "react-redux";
import moment from "moment";
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
      selectedStartDate: moment(date).format("YYYY-MM-DD")
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    let today = moment();
    let day = today.clone().startOf("month");
    let customDatesStyles = [
      {
        date: moment("2019-07-25"),
        style: {
          backgroundColor: `blue`
        },
        textStyle: {
          color: `white`
        }
      }
    ];
    const minDate = Date.now();

    let start = moment();
    let end = moment().add(45, "d");

    var arr = [];
    // Get "next" monday
    let tmp = start.clone().day(7);
    if (tmp.isAfter(start, "d")) {
      arr.push(tmp.format("YYYY-MM-DD"));
    }
    while (tmp.isBefore(end)) {
      tmp.add(7, "days");
      arr.push(tmp.format("YYYY-MM-DD"));
    }
    console.log(arr);

    let disabledDays = ["2019-07-25", "2019-07-26", ...arr];

    return (
      <View style={styles.container}>
        <CalendarPicker
          disabledDates={disabledDays}
          weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
          customDatesStyles={customDatesStyles}
          minDate={minDate}
          onDateChange={this.onDateChange}
          startFromMonday={true}
          previousTitle="Anterior"
          nextTitle="Próximo"
          months={[
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ]}
        />

        <View>
          <Text>SELECTED: {selectedStartDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "white" : `blue`
  }
});

const mapStateToProps = state => ({
  status: state.auth.status
});

export default connect(
  mapStateToProps,
  {}
)(Home);
