import React, { Component } from "react";
import "../css/footer.css";
import logoface from "../svg/facebook-f-brands.svg";
import logogoogle from "../svg/google.svg";
export default class Footerlogin extends Component {
  state = {
    logoface: logoface,
    logogoogle: logogoogle
  };
  render() {
    return (
      <div id="footer">
        <div id="title">
          <div id="titlelogwith">
            <p id="logwith">or log in with</p>
          </div>
        </div>
        <div id="buttonslog">
          <button id="loggoogle">
            <img src={this.state.logogoogle} alt="logo-google" />
            Google
          </button>
          <button id="logfacebook">
            <img src={this.state.logoface} alt="logo-facebook" />
            Facebook
          </button>
        </div>
        <p>
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </div>
    );
  }
}
