import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import { Text } from "react-native";
class Transfer extends Component {
  state = {};
  render() {
    return (
      <div className="grid-Stcontainer">
        <div className="grid-Stitem1">
          <h2 id="trId">CASH TRANSFER</h2>
        </div>
        <React.Fragment>
          <div className="grid-Stitem2">
            <div class="form-group" className="grid-Stitem2">
              <label for="editProfile" id="tag">
                From:
              </label>
              <input
                type="text"
                class="form-control"
                id="tag"
                placeholder="Enter Account Number"
              />
              <br />
              <input
                type="number"
                class="form-control"
                id="tag"
                placeholder="Enter Amount"
              />
            </div>
            <br />
            <div class="form-group" className="grid-Stitem2">
              <label for="editProfile" id="tag">
                To:
              </label>
              <input
                type="text"
                class="form-control"
                id="tag"
                placeholder="Enter Account Number"
              />
              <br />
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="IFSC CODE"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Bank Name"
                  />
                </div>
              </div>
            </div>
            <br />
            <div>
              <button class="btn btn-primary" type="submit">
                Confirm Transfer
              </button>
            </div>
          </div>
        </React.Fragment>

        <React.Fragment>
          <div className="grid-Stitem2">
            <table id="table-head" class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Account No</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">IFSC</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20096486159 </td>
                  <td>SBI</td>
                  <td>SBIN00005089</td>
                  <td>6000.00</td>
                </tr>
                <tr>
                  <td>1486563145 </td>
                  <td>PNB </td>
                  <td>PUNB0015300 </td>
                  <td>2560.00</td>
                </tr>
                <tr>
                  <td>15492869647 </td>
                  <td>HDFC</td>
                  <td>HDFC0000125</td>
                  <td>9000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Transfer;
