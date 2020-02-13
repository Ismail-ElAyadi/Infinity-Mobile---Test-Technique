import React, { Component } from "react";
import "../css/header.css";
export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <button className="button-top">
          <span className="arrow-left"></span>
        </button>
        <div id="text-header">
          <h1 className="loginText">Login</h1>
          <p className="welcomeText">Hi, Welcome Back!</p>
        </div>
      </div>
    );
  }
}
