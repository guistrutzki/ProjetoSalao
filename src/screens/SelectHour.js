import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import CardHours from '../components/CardHours';

export class SelectHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: [
        { 
          hour: "08:00",
          reserved: true,
          uid: "aabbcc",
          name: "Betina"
        },
        { 
          hour: "09:00",
          reserved: false,
          uid: "123122ass",
          name: "Flavia"
        },
        { 
          hour: "10:00",
          reserved: false,
          uid: "2312asd",
          name: "Dolores"
        },
        { 
          hour: "11:00",
          reserved: true,
          uid: "12312aas",
          name: "Marta"
        },
        { 
          hour: "13:00",
          reserved: true,
          uid: "adfa12asd",
          name: "Juliana"
        },
        { 
          hour: "14:00",
          reserved: false,
          uid: "1easdasda",
          name: "Roberta"
        },
        { 
          hour: "15:00",
          reserved: false,
          uid: "dasdas",
          name: "Claudia"
        },
        { 
          hour: "16:00",
          reserved: true,
          uid: "asdas",
          name: "Maria"
        },
      ]
    };

    this.handleHourSelect = this.handleHourSelect.bind(this);
  }

  handleHourSelect(hour, uid, name) {
    console.log(hour, uid, name);
  }

  render() {
    return (
      <LinearGradient
        colors={["#ff66cc", "#19568D"]}
        style={styles.container}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
      >
        <View style={styles.welcomeArea}>
          <Text style={styles.welcomeText}>Escolha um horário</Text>
          <Text style={styles.welcomeTextName}>Agendamento</Text>
        </View>

        <FlatList
          data={this.state.hours}
          keyExtractor={(item, index) => item.uid}
          renderItem={ card => (
            <CardHours
              selectCard={this.handleHourSelect} 
              data={card.item}
            />
          )}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});

const mapStateToProps = state => ({
  dateSelected: state.schedule.dateSelected
});

export default connect(
  mapStateToProps,
  {}
)(SelectHour);
