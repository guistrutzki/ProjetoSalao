import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import {
  setEmailField,
  setPasswordField,
  doLogin,
  setNameField
} from "../actions/AuthActions";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.loginAction = this.loginAction.bind(this);
    this.verifyStatus = this.verifyStatus.bind(this);
  }

  componentDidUpdate() {
    this.verifyStatus();
  }

  loginAction() {
    if (this.props.emailValid === true && this.props.passwordValid === true) {
      this.props.doLogin(this.props.email, this.props.password);
    }
  }

  verifyStatus() {
    if (this.props.status === 1) {
      alert("Manda pra home");
    }
  }

  render() {
    let buttonOpacity = 0.2;

    if (this.props.emailValid === true && this.props.passwordValid === true) {
      buttonOpacity = 1;
    }

    return (
      <ImageBackground
        source={require("../assets/login.jpg")}
        style={styles.container}
      >
        <ScrollView style={styles.scrollViewStyle}>
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={styles.keyboardContainer}
          >
            <Text style={styles.header}>Cadastre-se</Text>

            <View style={styles.fieldArea}>
              <Text style={styles.fieldTitle}>NOME {this.props.nameValid}</Text>
              <TextInput
                style={styles.fieldItem}
                value={this.props.name}
                onChangeText={text => this.props.setNameField(text)}
              />
              {this.props.nameValid && (
                <Image
                  style={styles.checkedImg}
                  source={require("../assets/checked.png")}
                />
              )}
            </View>

            <View style={styles.fieldArea}>
              <Text style={styles.fieldTitle}>EMAIL</Text>
              <TextInput
                style={styles.fieldItem}
                value={this.props.email}
                onChangeText={text => this.props.setEmailField(text)}
              />
              {this.props.emailValid && (
                <Image
                  style={styles.checkedImg}
                  source={require("../assets/checked.png")}
                />
              )}
            </View>

            <View style={styles.fieldArea}>
              <Text style={styles.fieldTitle}>SENHA</Text>
              <TextInput
                style={styles.fieldItem}
                value={this.props.password}
                secureTextEntry={true}
                onChangeText={text => this.props.setPasswordField(text)}
              />
              {this.props.passwordValid && (
                <Image
                  style={styles.checkedImg}
                  source={require("../assets/checked.png")}
                />
              )}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

        <TouchableHighlight
          underlayColor={null}
          style={[styles.button, { opacity: buttonOpacity }]}
          onPress={() => {
            this.loginAction();
          }}
        >
          <Image
            source={require("../assets/loginButton.png")}
            style={styles.buttonImage}
          />
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  keyboardContainer: {
    flex: 1
  },
  scrollViewStyle: {
    flex: 1
  },
  header: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 50
  },
  fieldTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  fieldItem: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 17,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "pink"
  },
  fieldArea: {
    marginBottom: 20,
    position: "relative"
  },
  checkedImg: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 15,
    top: 45
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ff0",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonImage: {
    width: 30,
    height: 30
  },
  bArea: {
    flexDirection: "row"
  },
  bText: {
    flex: 1,
    height: 36,
    justifyContent: "center",
    alignItems: "center"
  },
  bTextInt: {
    color: "#fff",
    fontSize: 15
  }
});

const mapStateToProps = state => ({
  status: state.auth.status,
  name: state.auth.name,
  email: state.auth.email,
  password: state.auth.password,
  emailValid: state.auth.emailValid,
  nameValid: state.auth.nameValid,
  passwordValid: state.auth.passwordValid
});

export default connect(
  mapStateToProps,
  { setEmailField, setPasswordField, doLogin, setNameField }
)(SignUp);
