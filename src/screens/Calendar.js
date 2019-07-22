import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/pt-br";
import LinearGradient from "react-native-linear-gradient";
import CalendarPicker from "react-native-calendar-picker";
import { loadCalendar, selectDate } from "../actions/ScheduleActions";

export class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: false,
      buttonOpacity: 0.3
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    // moment.locale("pt-BR");
    // alert(moment(date).format("LL"));

    this.setState({
      selectedDate: true
    });

    this.props.selectDate(moment(date).format("YYYY-MM-DD"));
  }

  render() {
    let buttonOpacity = 0.2;
    if (this.state.selectedDate) {
      buttonOpacity = 1;
    }

    const { selectedDate } = this.state;
    const minDate = Date.now();
    let start = moment();
    let end = moment().add(360, "d");
    const arr = [];
    let tmp = start.clone().day(7);

    if (tmp.isAfter(start, "d")) {
      arr.push(tmp.format("YYYY-MM-DD"));
    }
    while (tmp.isBefore(end)) {
      tmp.add(7, "days");
      arr.push(tmp.format("YYYY-MM-DD"));
    }

    let disabledDays = [...arr];

    return (
      <View style={styles.container}>
        {this.props.unavailableDays && (
          <LinearGradient
            colors={["#ff66cc", "#19568D"]}
            style={styles.container}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
          >
            <View style={styles.welcomeArea}>
              <Text style={styles.welcomeText}>Escolha um dia</Text>
              <Text style={styles.welcomeTextName}>Agendamento</Text>
            </View>

            <CalendarPicker
              scaleFactor={375}
              selectedDayStyle={{ color: "#fff", backgroundColor: "#a61bc2" }}
              selectedDayTextColor="#FFFFFF"
              textStyle={{ color: "#fff" }}
              todayBackgroundColor="#000f33"
              disabledDates={disabledDays}
              weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
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

            <View style={ [styles.nextButtonArea, { opacity: buttonOpacity }] }>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.selectedDate) {
                    alert("clicou");
                  }
                }}
              >
                <Text style={styles.nextButtonText}>Avançar</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1,
    backgroundColor: "#5c146f"
  },
  welcomeArea: {
    marginLeft: "5%",
    marginTop: 30,
    marginBottom: 40,
    height: 40,
    width: "90%"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14
  },
  welcomeTextName: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: 28,
    color: "#fff"
  },
  selectDateArea: {
    marginLeft: "5%",
    width: "90%"
  },
  selectDateText: {
    fontSize: 24,
    color: "#fff"
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 24
  },
  nextButtonArea: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    borderRadius: 10,
    height: 50,
    width: "80%",
    backgroundColor: "#5c146f",
    position: "absolute",
    bottom: 60,
  }
});

const mapStateToProps = state => ({
  status: state.auth.status,
  unavailableDays: state.schedule.unavailableDays,
  dateSelected: state.schedule.dateSelected
});

export default connect(
  mapStateToProps,
  { loadCalendar, selectDate }
)(Calendar);
