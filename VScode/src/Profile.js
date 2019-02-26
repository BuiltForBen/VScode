import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import { Text } from "react-native";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      confirmPassword: "",
      data: [],
      accountno: "",
      ifsc: "",
      bank: "",
      isMainProfileVisible: true,
      isEditProfileVisile: false,
      isAddAccountVisible: false,
      isDeleteAccountVisible: false
    };
  }
  displayMainProfile = () => {
    this.setState({
      isMainProfileVisible: true,
      isEditProfileVisile: false,
      isAddAccountVisible: false,
      isDeleteAccountVisible: false
    });
  };
  displayEditProfile = () => {
    this.setState({
      isMainProfileVisible: false,
      isEditProfileVisile: true,
      isAddAccountVisible: false,
      isDeleteAccountVisible: false
    });
  };
  displayAddAccount = () => {
    this.setState({
      isMainProfileVisible: false,
      isEditProfileVisile: false,
      isAddAccountVisible: true,
      isDeleteAccountVisible: false
    });
  };
  displayDeleteAccount = () => {
    this.setState({
      isMainProfileVisible: false,
      isEditProfileVisile: false,
      isAddAccountVisible: false,
      isDeleteAccountVisible: true
    });
  };
  addAccount = () => {
    var acnumber = document.getElementById("accountno").value;
    console.log(acnumber);
    var ifscCode = document.getElementById("ifsc").value;
    console.log(ifscCode);
    var bankName = document.getElementById("bank").value;
    console.log(bankName);
  };
  editProfile = () => {
    var name = document.getElementById("fullname").value;
    console.log(name);
    var email = document.getElementById("emailId").value;
    console.log(email);
    var curpass = document.getElementById("currentpassword").value;
    console.log(curpass);
    var newpas = document.getElementById("newPassword").value;
    console.log(newpas);
    var conpass = document.getElementById("confirmPassword").value;
    console.log(conpass);
  };
  render() {
    return (
      <div className="grid-Stcontainer">
        <div className="grid-Stitem1">
          <h2 id="prId">PROFILE</h2>
        </div>

        <div className="grid-item3">
          <button
            className="grid-statement"
            type="submit"
            class="btn btn-outline-dark"
            style={{ background: "#ffff" }}
            onClick={this.displayEditProfile}
          >
            <Text id="stText">EDIT PROFILE</Text>
          </button>
          <br />
          <button
            className="grid-transfer"
            type="submit"
            class="btn btn-outline-dark"
            style={{ background: "#ffff" }}
            onClick={this.displayAddAccount}
          >
            <Text id="trText">ADD ACCOUNT</Text>
          </button>
          <br />
          <button
            className="grid-profile"
            type="submit"
            class="btn btn-outline-dark"
            style={{ background: "#ffff" }}
            onClick={this.displayDeleteAccount}
          >
            <Text id="prText">DELETE ACCOUNT</Text>
          </button>
        </div>

        <div className="grid-Stitem2">
          {this.state.isMainProfileVisible && (
            <React.Fragment>
              <div class="MainProfile">
                <h1 class="display-4">Hello, Ben</h1>
                <hr class="my-4" />
                <p class="lead">This is your profile.</p>
              </div>
            </React.Fragment>
          )}

          {this.state.isEditProfileVisile && (
            <React.Fragment>
              <div class="EditProfile">
                <form>
                  <div class="form-group" id="tag">
                    <input
                      type="text"
                      class="form-control"
                      name="fullname"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />

                  <div class="form-group" id="tag">
                    <input
                      type="email"
                      class="form-control"
                      name="emailId"
                      aria-describedby="emailHelp"
                      placeholder="Email/ Username"
                      value={this.state.emailId}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div class="form-group" id="tag">
                    <input
                      type="password"
                      class="form-control"
                      name="currentPassword"
                      placeholder="Current Password"
                      value={this.state.currentPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div class="form-group" id="tag">
                    <input
                      type="password"
                      class="form-control"
                      name="newPassword"
                      placeholder="New Password"
                      value={this.state.newPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div class="form-group" id="tag">
                    <input
                      type="password"
                      class="form-control"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <button
                      class="btn btn-primary"
                      type="submit"
                      onClick={this.editProfile}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </React.Fragment>
          )}

          {this.state.isAddAccountVisible && (
            <React.Fragment>
              <div class="EditAccount">
                <table id="table-head" class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Account No</th>
                      <th scope="col">IFSC</th>
                      <th scope="col">Bank Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20096486159 </td>
                      <td>SBIN00005089</td>
                      <td>SBI</td>
                    </tr>
                    <tr>
                      <td>1486563145 </td>
                      <td>PUNB0015300 </td>
                      <td>PNB</td>
                    </tr>
                    <tr>
                      <td>15492869647 </td>
                      <td>SBIN00009632</td>
                      <td>SBI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div class="form-group" className="grid-Stitem2">
                <input
                  type="text"
                  class="form-control"
                  id="accountno"
                  placeholder="Enter Account Number"
                />
                <br />
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="IFSC Code"
                      id="ifsc"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Bank Name"
                      id="bank"
                    />
                  </div>
                </div>
                <br />
                <button
                  class="btn btn-primary"
                  type="submit"
                  onClick={this.state.addAccount}
                >
                  ADD
                </button>
              </div>
            </React.Fragment>
          )}

          {this.state.isDeleteAccountVisible && (
            <React.Fragment>
              <div class="deleteAccount">
                <table id="table-head" class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Account No</th>
                      <th scope="col">IFSC</th>
                      <th scope="col">Bank Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20096486159 </td>
                      <td>SBIN00005089</td>
                      <td>SBI</td>
                    </tr>
                    <tr>
                      <td>1486563145 </td>
                      <td>PUNB0015300 </td>
                      <td>PNB</td>
                    </tr>
                    <tr>
                      <td>15492869647 </td>
                      <td>SBIN00009632</td>
                      <td>SBI</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div class="form-group" className="grid-Stitem2">
                  <inputs
                    type="text"
                    class="form-control"
                    id="tag"
                    placeholder="Enter Account Number"
                  />
                  <br />
                  <button class="btn btn-primary" type="submit">
                    DELETE
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
