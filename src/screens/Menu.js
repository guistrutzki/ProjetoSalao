import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <View style={styles.container}> */}
        <LinearGradient
          colors={["#5c146f", "#ff66cc"]}
          style={styles.container}
        >
          <View style={styles.titleArea}>
            <Text style={styles.titleText}>Studio Priscila Andrades</Text>
          </View>
          <View style={styles.welcomeArea}>
            <Text style={styles.welcomeText}>Bom dia</Text>
            <Text style={styles.welcomeTextName}>Aline Silveira</Text>
          </View>

          {/* AGENDAMENTOS */}
          <TouchableOpacity
            style={styles.optionCardArea}
            onPress={() => {
              alert("clicou");
            }}
          >
            <View style={styles.optionCardImg}>
              <Image
                source={require("../assets/mirror.png")}
                style={styles.optionCardImage}
              />
            </View>

            <View style={styles.optionCardTextArea}>
              <Text style={styles.optionCardText}>Serviços</Text>
            </View>
          </TouchableOpacity>

          {/* SERVICOS */}
          <TouchableOpacity
            style={styles.optionCardArea}
            onPress={() => {
              alert("clicou");
            }}
          >
            <View style={styles.optionCardImg}>
              <Image
                source={require("../assets/calendar.png")}
                style={styles.optionCardImage}
              />
            </View>

            <View style={styles.optionCardTextArea}>
              <Text style={styles.optionCardText}>Agendamentos</Text>
            </View>
          </TouchableOpacity>

          {/* Quem somos ? */}
          <TouchableOpacity
            style={styles.optionCardArea}
            onPress={() => {
              alert("clicou");
            }}
          >
            <View style={styles.optionCardImg}>
              <Image
                source={require("../assets/network.png")}
                style={styles.optionCardImage}
              />
            </View>

            <View style={styles.optionCardTextArea}>
              <Text style={styles.optionCardText}>Quem somos ?</Text>
            </View>
          </TouchableOpacity>

          {/* Fale conosco */}
          <TouchableOpacity
            style={styles.optionCardArea}
            onPress={() => {
              alert("clicou");
            }}
          >
            <View style={styles.optionCardImg}>
              <Image
                source={require("../assets/phone-receiver.png")}
                style={styles.optionCardImage}
              />
            </View>

            <View style={styles.optionCardTextArea}>
              <Text style={styles.optionCardText}>Fale Conosco</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    flex: 1
  },
  titleArea: {
    width: "100%",
    height: 60
  },
  titleText: {
    paddingTop: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  welcomeArea: {
    marginLeft: "5%",
    marginTop: 30,
    marginBottom: 20,
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
  optionCardArea: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    width: "90%",
    height: 100,
    marginLeft: "5%",
    borderRadius: 20,
    marginTop: 30,
    flexDirection: "row"
  },
  optionCardImg: {
    paddingLeft: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: 30
  },
  optionCardTextArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 4
  },
  optionCardText: {
    fontSize: 23,
    color: "purple",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  status: state.auth.status
});

export default connect(
  mapStateToProps,
  {}
)(Menu);
