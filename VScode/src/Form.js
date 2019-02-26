import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import App from "./App";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from "react-native";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      isLoginVisible: true,
      isMainVisible: false
    };
  }
  onChangeText = () => {
    const { key, val } = this.state;
    this.setState({ [key]: val });
  };
  signUp = () => {
    const { fullName, username, password, confirmPassword } = this.state;
    if (
      fullName === "" ||
      username === "" ||
      password == "" ||
      confirmPassword === ""
    ) {
      alert("All Fields are mandatory");
    } else {
      alert("Successful");
    }
  };
  displayLogin = () => {
    this.setState({ isLoginVisible: true, isMainVisible: false });
  };
  diplayMain = () => {
    this.setState({ isLoginVisible: false, isMainVisible: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoginVisible && (
          <React.Fragment>
            <View style={styles.maincontainer}>
              <SingUp />

              <TouchableHighlight
                style={[styles.buttonContainer, styles.signupButton]}
                onPress={this.signUp}
              >
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableHighlight>
            </View>
          </React.Fragment>
        )}

        <View>{this.state.isMainVisible && <App />}</View>
      </React.Fragment>
    );
  }
}
class SingUp extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ marginBottom: "50px" }}>
          <Image style={styles.icon} source={require("./signup.png")} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./user.png")} />
          <TextInput
            style={styles.inputs}
            placeholder="Full name"
            keyboardType="text"
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("fullName", val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./message.png")} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("username", val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./key.png")} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("password", val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./key.png")} />
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("confirmPassword", val)}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },

  inputContainer: {
    borderBottomColor: "black",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: 500,
    height: 45,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 40,
    width: 500,
    marginLeft: 10,
    borderBottomColor: "#FFFFFF",
    fontFamily: "Monospace",
    fontSize: "18px"
  },

  icon: {
    width: 200,
    height: 200
  },

  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "#00b5ec"
  },
  signupText: {
    color: "white",
    fontFamily: "Monospace",
    fontSize: "18px"
  }
});
export default Form;
