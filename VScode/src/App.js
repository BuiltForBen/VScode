import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import Main from "./Main";
import Form from "./Form";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  Image
} from "react-native";
class App extends Component {
  state = {
    username: "Ben",
    password: "1234567",
    isLoginVisible: true,
    isMainVisible: false,
    isRegistrationVisible: false
  };
  displayLogin = () => {
    this.setState({
      isLoginVisible: true,
      isMainVisible: false,
      isRegistrationVisible: false
    });
  };
  diplayMain = () => {
    var myUsername = document.getElementById("userId").value;
    var myPassword = document.getElementById("userPassword").value;

    if (
      myUsername !== this.state.username ||
      myPassword !== this.state.password
    ) {
      alert("Incorrect Username or Password");
    } else {
      this.setState({
        isLoginVisible: false,
        isMainVisible: true,
        isRegistrationVisible: false
      });
    }
  };
  diplayRegistration = () => {
    this.setState({
      isLoginVisible: false,
      isMainVisible: false,
      isRegistrationVisible: true
    });
  };
  handleUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoginVisible && (
          <React.Fragment>
            <View style={styles.maincontainer}>
              <SingUp />

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={this.diplayMain}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonContainer}
                onPress={this.diplayRegistration}
              >
                <Text>Register?</Text>
              </TouchableHighlight>
            </View>
          </React.Fragment>
        )}

        {this.state.isRegistrationVisible && <Form />}
        {this.state.isMainVisible && <Main />}
      </React.Fragment>
    );
  }
}
class SingUp extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ marginBottom: "50px" }}>
          <Image style={styles.icon} source={require("./login.png")} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./message.png")} />
          <TextInput
            style={styles.inputs}
            type="text"
            placeholder="Email"
            id="userId"
            underlineColorAndroid="transparent"
            //onChange={this.handleUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("./key.png")} />
          <TextInput
            type="password"
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Password"
            id="userPassword"
            underlineColorAndroid="transparent"
            // onChange={this.handlePassword}
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
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white",
    fontFamily: "Monospace",
    fontSize: "18px"
  }
});
export default App;
