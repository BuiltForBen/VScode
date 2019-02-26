import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import { Text } from "react-native";
class Statements extends Component {
  state = {};
  render() {
    return (
      <div className="grid-Stcontainer">
        <div className="grid-Stitem1">
          <h2 id="stId">BALANCE ENQUIRY/MINI STATEMENTS</h2>
        </div>
        <React.Fragment>
          <div className="grid-Stitem2">
            <table id="table-head" class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Account No</th>
                  <th scope="col">IFSC</th>
                  <th scope="col">Bank Name</th>
                </tr>
              </thead>{" "}
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
                <tr>
                  <td>2369754250 </td>
                  <td>HDFC0000125</td>
                  <td>HDFC</td>
                </tr>
              </tbody>
            </table>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Enter Account Number"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>

        <React.Fragment>
          <div className="grid-Stitem3">
            <table id="table-head" class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction</th>
                  <th scope="col">Debit</th>
                  <th scope="col">Credit</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/01/2019</td>
                  <td>Tata Sky Recharge</td>
                  <td>500.00</td>
                  <td>00.00</td>
                  <td>1634000.00</td>
                </tr>
                <tr>
                  <td>26/01/2019</td>
                  <td>Paytm</td>
                  <td>50.00</td>
                  <td>00.00</td>
                  <td>1633950.00</td>
                </tr>
                <tr>
                  <td>01/02/2019</td>
                  <td>Salary</td>
                  <td>00.00</td>
                  <td>20000.00</td>
                  <td>1653950.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Statements;
