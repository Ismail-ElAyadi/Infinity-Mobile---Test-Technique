import React, { Component } from "react";
import "../css/form.css";
import eyeOpen from "../svg/eye-solid.svg";
import eyeSlash from "../svg/eye-slash-solid.svg";
export default class Formlogin extends Component {
  state = {
    viewpassword: false,
    logo: eyeSlash,
    altlogo: "eye slashed",
    inputType: "password"
  };
  hidePswd = () => {
    const pswd = this.state.viewpassword;
    this.setState({ viewpassword: !pswd });
    if (!pswd) {
      this.setState({
        logo: eyeOpen,
        altlogo: "eye open",
        inputType: "text"
      });
    } else {
      this.setState({
        logo: eyeSlash,
        altlogo: "eye Slash",
        inputType: "password"
      });
    }
  };

  render() {
    return (
      <div id="formLogin">
        <div id="askEmail">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div id="askPswd">
          <label htmlFor="password">Password</label>
          <div>
            <input id="password" name="password" type={this.state.inputType} />
            <img
              onClick={this.hidePswd}
              className="hidePswd"
              src={this.state.logo}
              alt={this.state.altlogo}
            />
          </div>
        </div>
        <div id="remember">
          <div>
            <input id="rememberInput" name="rememberInput" type="checkbox" />
            <label htmlFor="rememberInput">Remember me</label>
          </div>
          <a href="/"> Forgot password ?</a>
        </div>
        <div id="buttonlog">
          <button id="login">Log In</button>
        </div>
      </div>
    );
  }
}
