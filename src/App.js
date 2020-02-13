import React, { Component, Fragment } from 'react'
import Header from './loginpage/Header';
import './css/grid.css'
import './css/app.css'
import Formlogin from './loginpage/Formlogin';
import Footerlogin from './loginpage/Footerlogin'


export default class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <Formlogin/>
          <Footerlogin/>
      </Fragment>
    )
  }
}

