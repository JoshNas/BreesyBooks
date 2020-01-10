import React, { Component } from 'react'
import { SignOut } from 'aws-amplify-react';
import logo from './img/logo.png'
import './Navbar.css'
import { Auth } from 'aws-amplify'

export class Navbar extends Component {
  render() {
    console.log(Auth.user.attributes)

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
        <img src={logo} className="logo" alt="logo" />
        <div className="lead brand">
          <a className="navbar-text items" href="/">Breesy Books</a>
        </div>
          <button className="navbar-toggler tog" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li>
            <a className="navbar-text items" href="/about">
              About
            </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="breesydev.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Groups
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="breesydev.com">Group 1</a>
                <a className="dropdown-item" href="breesydev.com">Group 2</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="breesydev.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Books
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="breesydev.com">Book 1</a>
                <a className="dropdown-item" href="breesydev.com">Book 2</a>
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
