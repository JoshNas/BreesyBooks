import React, { Component } from 'react'
import { SignOut } from 'aws-amplify-react';
import logo from './img/logo.png'
import './Navbar.css'
import { Auth } from 'aws-amplify'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
        <img src={logo} className="logo" alt="logo" />
        <div className="lead brand">Breesy Books</div>
          <button class="navbar-toggler tog" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="breesydev.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Groups
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="breesydev.com">Group 1</a>
                <a class="dropdown-item" href="breesydev.com">Group 2</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="breesydev.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Books
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="breesydev.com">Book 1</a>
                <a class="dropdown-item" href="breesydev.com">Book 2</a>
              </div>
            </li>
          </ul>
          <div className="pull-right">
            <div className="navbar-text">Welcome, {Auth.user.attributes.name} </div>
            <SignOut />
          </div>
        </div>

      </nav>
    )
  }
}
