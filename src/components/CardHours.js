import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

export default class CardHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reserved: this.props.data.reserved
    }
  }
  
  render() {
    const { hour, reserved, uid, name } = this.props.data;
    const bgColor = this.state.reserved === true ? 'red' : 'green';
    return (
      <TouchableOpacity 
        style={styles.boxArea}
        onPress={() => {
          if (reserved === false) {
            Alert.alert(
              'Confirmar reserva',
              `Deseja agendar seu horário para as ${ hour }`,
              [
                {
                  text: 'Cancelar',
                  style: 'cancel',
                },
                {text: 'Confirmar', onPress: () => {
                  this.props.selectCard(hour, uid, name);
                  this.setState({
                    reserved: true,
                  })
                }},
              ],
              {cancelable: true},
            );
          } else {
            alert ('Este horário já está reservado.');
          }
        }}
      >
        <View style={[styles.boxTimeArea, {backgroundColor: bgColor}]}>
          <Text style={styles.boxTimeText}>{ hour }</Text>
        </View>

        <View style={[styles.boxTextArea, {backgroundColor: bgColor}]}>
          <Text style={styles.boxText}>
            { reserved === true ? 'Indisponível' : 'Disponível' }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  boxArea: {
    opacity: 0.7,
    zIndex: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 60,
    width: "90%",
    marginLeft: "5%",
    marginBottom: 10,
    borderRadius: 10,
  },
  boxTimeArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "30%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  boxTimeText: {
    fontSize: 30,
    color: "#fff",
  },
  boxTextArea: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    backgroundColor: "red",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  boxTextAreaActive: {
    backgroundColor: "green",
  },
  boxText: {
    color: "#fff",
    fontSize: 25,
  },
});
