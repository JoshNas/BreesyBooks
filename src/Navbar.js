import React, { Component, Button } from 'react'
import { SignOut } from 'aws-amplify-react';
import logo from './img/logo.png'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    console.log(SignOut)
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <img src={logo} alt="logo" className="logo"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <SignOut />
        </div>
      </nav>
    )
  }
}
