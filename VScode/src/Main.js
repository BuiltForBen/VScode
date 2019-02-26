import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import { Image, Text } from "react-native";
import Statements from "./Statements";
import Transfer from "./Transfer";
import Profile from "./Profile";
class Main extends Component {
  state = {
    isStatementVisible: false,
    isTransferVisible: false,
    isProfileVisible: false,
    isLoginVisible: false
  };
  displayStatment = () => {
    this.setState({
      isStatementVisible: true,
      isTransferVisible: false,
      isProfileVisible: false,
      isLoginVisible: false
    });
  };
  displayTransfer = () => {
    this.setState({
      isTransferVisible: true,
      isStatementVisible: false,
      isProfileVisible: false,
      isLoginVisible: false
    });
  };
  displayProfile = () => {
    this.setState({
      isProfileVisible: true,
      isStatementVisible: false,
      isTransferVisible: false,
      isLoginVisible: false
    });
  };
  diplayLogin = () => {
    this.setState({
      isLoginVisible: true,
      isMainVisible: false
    });
  };
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item1">
          <h1 className="grid-h1">ACCOUNT MANAGER</h1>

          <div className="grid-nav2">
            <button
              id="logout-btn"
              class="btn btn-danger"
              type="submit"
              onClick={this.diplayLogin}
            >
              LOG OUT
            </button>
          </div>
        </div>
        <React.Fragment>
          <div className="grid-item2">
            {this.state.isStatementVisible && <Statements />}
            {this.state.isTransferVisible && <Transfer />}
            {this.state.isProfileVisible && <Profile />}
          </div>

          <div className="grid-item3">
            <button
              className="grid-statement"
              type="submit"
              class="btn btn-outline-dark"
              style={{ background: "#ffff" }}
              onClick={this.displayStatment}
            >
              <Text id="stText">STATEMENTS</Text>
            </button>
            <br />
            <button
              className="grid-transfer"
              type="submit"
              class="btn btn-outline-dark"
              style={{ background: "#ffff" }}
              onClick={this.displayTransfer}
            >
              <Text id="trText">TRANSFER</Text>
            </button>
            <br />
            <button
              className="grid-profile"
              type="submit"
              class="btn btn-outline-dark"
              style={{ background: "#ffff" }}
              onClick={this.displayProfile}
            >
              <Text id="prText">PROFILE</Text>
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default Main;
